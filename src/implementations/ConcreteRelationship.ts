import { ColleagueRelationship } from '../interfaces/ColleagueRelationship'
import { Colleague } from '../abstracts/Colleague'

// moved all colleague relationship outside of mediator in order to follow the Common Closure Principle(put components that change often to seperate classes from those who dont)
export class ConcreteRelationship implements ColleagueRelationship {
  _colleagues: object = {}
  readonly relationship = {
    logger: {
      on: { '*': true },
      emit: {}
    },
    A: {
      on: { start: true, finished: true },
      emit: { start: true, finished: true }
    }
    // B: {
    //   on: { start: true, finished: true },
    //   emit: { finished: true }
    // }
  }

  onEventExists(colleague: Colleague, event: string) {
    return (
      this.relationship &&
      this.relationship[colleague.name] &&
      this.relationship[colleague.name].on &&
      this.relationship[colleague.name].on[event]
    )
  }
  emitEventExists(colleague: Colleague, event: string) {
    return (
      this.relationship &&
      this.relationship[colleague.name] &&
      this.relationship[colleague.name].emit &&
      this.relationship[colleague.name].emit[event]
    )
  }
  register(colleague: Colleague) {
    if (!this._colleagues[colleague.id]) {
      this._colleagues[colleague.id] = colleague
    } else {
      throw new Error(`Colleague ${colleague.name} already exists!`)
    }
  }
  checkColleagueExists(colleague: Colleague) {
    return !!this._colleagues[colleague.id]
  }
}
