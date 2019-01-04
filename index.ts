// types
import { ColleagueName as Name, ColleagueMap } from './src/types/Colleague'
import Relations from './src/types/Relations'

// interfaces
import Mediator from './src/interfaces/Mediator'
import Emitter from './src/interfaces/Emitter'

// concretes
import Colleague from './src/abstracts/Colleague'
import _Mediator from './src/implementations/ConcreteMediator'
import _Emitter from './src/implementations/ConcreteEmitter'

export declare type ColleagueName = Name
export declare type RelationsMap = Relations

export { Mediator, Emitter, Colleague }

export class NodeMediator {
  private static mediator: Mediator
  constructor(
    relations: Relations = {},
    colleagues: ColleagueMap = {},
    emitter: Emitter = new _Emitter({ wildcard: true, delimiter: '::', maxListeners: 100 })
  ) {
    if (!NodeMediator.mediator) {
      NodeMediator.mediator = new _Mediator(relations, colleagues, emitter)
    }
    return NodeMediator.mediator
  }
  static getInstance() {
    return NodeMediator.mediator
  }
}
