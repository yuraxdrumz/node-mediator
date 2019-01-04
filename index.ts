// types
import { ColleagueName as Name, ColleagueMap as map } from './src/types/Colleague'
import Relations from './src/types/Relations'

// concretes
import Colleague from './src/abstracts/Colleague'
import _Mediator from './src/implementations/ConcreteMediator'
import _Emitter from './src/implementations/ConcreteEmitter'

// interfaces
import Mediator from './src/interfaces/Mediator'
import Emitter from './src/interfaces/Emitter'

export declare type ColleagueName = Name
export declare type RelationsMap = Relations
export declare type ColleagueMap = map

export class NodeMediator {
  private static mediator: _Mediator
  private constructor() {}
  static initialize(
    relations: RelationsMap = {},
    colleagues: ColleagueMap = {},
    emitter: Emitter = new _Emitter({ wildcard: true, delimiter: '::', maxListeners: 100 })
  ): _Mediator {
    if (!NodeMediator.mediator) {
      NodeMediator.mediator = new _Mediator(relations, colleagues, emitter)
    }
    return NodeMediator.mediator
  }
  static getInstance(): _Mediator {
    return NodeMediator.mediator
  }
}

export { Mediator, Emitter, Colleague }
