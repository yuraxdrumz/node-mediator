import ColleagueRelationship from '../interfaces/ColleagueRelations'
import { ColleagueMap } from '../types/Colleague'
import { Relations } from '../types/Relations'
import Colleague from '../abstracts/Colleague'

// moved all colleague relationship outside of mediator in order to follow the Common Closure Principle(put components that change often to seperate classes from those who dont)
export default class ConcreteRelationship implements ColleagueRelationship {
  private _colleagues: ColleagueMap = {}
  readonly relationship: Relations

  constructor(relationship: Relations) {
    this.relationship = relationship
  }

  onEventExists(colleague: Colleague, event: string) {
    return !!(
      this.relationship &&
      this.relationship[colleague.name] &&
      this.relationship[colleague.name].on &&
      this.relationship[colleague.name].on[event]
    )
  }
  emitEventExists(colleague: Colleague, event: string) {
    return !!(
      this.relationship &&
      this.relationship[colleague.name] &&
      this.relationship[colleague.name].emit &&
      this.relationship[colleague.name].emit[event]
    )
  }
  register(colleague: Colleague) {
    if (!this._colleagues[colleague.name]) {
      this._colleagues[colleague.name] = colleague
    } else {
      throw new Error(`Colleague ${colleague.name} already exists!`)
    }
  }
  checkColleagueExists(colleague: Colleague) {
    return !!this._colleagues[colleague.name]
  }
}
