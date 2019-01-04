// types
import { ColleagueName as Name } from './src/types/Colleague'
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

export class NodeMediator {
  private static mediator: _Mediator
  private constructor() {}
  static getInstance(
    relations: RelationsMap = {},
    emitter: Emitter = new _Emitter({ wildcard: true, delimiter: '::', maxListeners: 100 })
  ): _Mediator {
    if (!NodeMediator.mediator) {
      NodeMediator.mediator = new _Mediator(relations, emitter)
    }
    return NodeMediator.mediator
  }
}

export { Mediator, Emitter, Colleague }
