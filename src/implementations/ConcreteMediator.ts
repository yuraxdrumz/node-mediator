import Mediator from '../interfaces/Mediator'
import { Listener } from '../types/Listener'
import Emitter from '../interfaces/Emitter'
import Colleague from '../abstracts/Colleague'
import { ColleagueMap } from '../types/Colleague'
import RelationsMap from '../types/Relations'

// an instance of a mediator which accepts an emitter interface implementor
export default class ConcreteMediator implements Mediator {
  emitter: Emitter
  relations: RelationsMap
  colleagues: ColleagueMap
  constructor(relations: RelationsMap, colleagues: ColleagueMap, emitter: Emitter) {
    this.emitter = emitter
    this.relations = relations
    this.colleagues = colleagues
  }

  onEventExists(colleague: Colleague, event: string) {
    return !!(
      this.relations &&
      this.relations[colleague.name] &&
      this.relations[colleague.name].on &&
      this.relations[colleague.name].on[event]
    )
  }
  emitEventExists(colleague: Colleague, event: string) {
    return !!(
      this.relations &&
      this.relations[colleague.name] &&
      this.relations[colleague.name].emit &&
      this.relations[colleague.name].emit[event]
    )
  }
  register(colleague: Colleague) {
    if (!this.colleagues[colleague.name]) {
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
  emit(colleague: Colleague, event: string, ...args: any[]): boolean {
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
