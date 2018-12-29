import { Mediator } from '../interfaces/Mediator'
import { Listener } from '../types/Listener'
import { Emitter } from '../interfaces/Emitter'
import { Colleague } from '../abstracts/Colleague'
import { ColleagueRelationship } from '../interfaces/ColleagueRelationship'
// an instance of a mediator which accepts an emitter interface implementor
export class ConcreteMediator implements Mediator {
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
    }
  }
  emit(colleague: Colleague, event: string, ...args: any[]): void {
    if (
      this.relationship.checkColleagueExists(colleague) &&
      this.relationship.emitEventExists(colleague, event)
    ) {
      this.emitter.emit(event, ...args)
    }
  }
  register(colleague: Colleague) {
    return this.relationship.register(colleague)
  }
}
