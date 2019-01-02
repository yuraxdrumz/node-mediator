import Mediator from '../interfaces/Mediator'
import { Listener } from '../types/Listener'
import Emitter from '../interfaces/Emitter'
import Colleague from '../abstracts/Colleague'
import ColleagueRelationship from '../interfaces/ColleagueRelationship'
// an instance of a mediator which accepts an emitter interface implementor
export default class ConcreteMediator implements Mediator {
  emitter: Emitter
  relationship: ColleagueRelationship
  constructor(emitter: Emitter, relationship: ColleagueRelationship) {
    this.emitter = emitter
    this.relationship = relationship
  }
  on(colleague: Colleague, event: string, cb: Listener) {
    if (
      this.relationship.checkColleagueExists(colleague) &&
      this.relationship.onEventExists(colleague, event)
    ) {
      this.emitter.on(event, cb)
    } else {
      throw new Error(
        `.on event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    }
  }
  emitAsync(colleague: Colleague, event: string, ...args: any[]): Promise<any> {
    if (
      this.relationship.checkColleagueExists(colleague) &&
      this.relationship.emitEventExists(colleague, event)
    ) {
      return this.emitter.emitAsync(event, ...args)
    } else {
      throw new Error(
        `.emit event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    }
  }
  emit(colleague: Colleague, event: string, ...args: any[]): boolean {
    if (
      this.relationship.checkColleagueExists(colleague) &&
      this.relationship.emitEventExists(colleague, event)
    ) {
      return this.emitter.emit(event, ...args)
    } else {
      throw new Error(
        `.emit event of type: ${event} for Colleague: ${
          colleague.name
        } is not allowed, please check relationship map...`
      )
    }
  }
  register(colleague: Colleague) {
    return this.relationship.register(colleague)
  }
}
