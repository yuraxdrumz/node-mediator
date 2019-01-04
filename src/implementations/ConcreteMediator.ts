import Mediator from '../interfaces/Mediator'
import { Listener } from '../types/Listener'
import Emitter from '../interfaces/Emitter'
import Colleague from '../abstracts/Colleague'
import { ColleagueMap } from '../types/Colleague'
import RelationsMap from '../types/Relations'

// an implementation of the Mediator interface, it controls the colleagues and events emitted and registered.
class ConcreteMediator implements Mediator {
  private emitter: Emitter
  private relations: RelationsMap
  private colleagues: ColleagueMap = {}
  constructor(relations: RelationsMap, emitter: Emitter) {
    this.emitter = emitter
    this.relations = relations
  }

  private eventExists(colleague: Colleague, event: string, prop: string) {
    return !!(
      this.relations &&
      this.relations[colleague.name] &&
      this.relations[colleague.name][prop] &&
      this.relations[colleague.name][prop][event]
    )
  }
  onEventExists(colleague: Colleague, event: string) {
    return this.eventExists(colleague, event, 'on')
  }
  emitEventExists(colleague: Colleague, event: string) {
    return this.eventExists(colleague, event, 'emit')
  }
  register(colleague: Colleague) {
    if (!this.checkColleagueExists(colleague)) {
      this.colleagues[colleague.name] = colleague
    } else {
      throw new Error(`Colleague ${colleague.name} already exists!`)
    }
  }
  checkColleagueExists(colleague: Colleague) {
    return !!this.colleagues[colleague.name]
  }
  on(colleague: Colleague, event: string, cb: Listener) {
    if (!this.checkColleagueExists(colleague)) {
      throw new Error(`Colleague with name ${colleague.name} was not registered...`)
    } else if (!this.onEventExists(colleague, event)) {
      throw new Error(
        `.on event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    } else {
      this.emitter.on(event, cb)
    }
  }
  emitAsync(colleague: Colleague, event: string, ...args: any[]): Promise<any> {
    if (!this.checkColleagueExists(colleague)) {
      throw new Error(`Colleague with name ${colleague.name} was not registered...`)
    } else if (!this.onEventExists(colleague, event)) {
      throw new Error(
        `.emitAsync event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    } else {
      return this.emitter.emitAsync(event, ...args)
    }
  }
  emit(colleague: Colleague, event: string, ...args: any[]) {
    if (!this.checkColleagueExists(colleague)) {
      throw new Error(`Colleague with name ${colleague.name} was not registered...`)
    } else if (!this.onEventExists(colleague, event)) {
      throw new Error(
        `.emit event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    } else {
      return this.emitter.emit(event, ...args)
    }
  }
}

export default ConcreteMediator
