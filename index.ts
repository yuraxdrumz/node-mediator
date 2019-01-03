// types
import { ColleagueName as Name } from './src/types/Colleague'
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

// facade class to abstract start complexity...
export abstract class NodeMediator {
  constructor(
    private readonly relations: Relations,
    private emitter: Emitter = new _Emitter({ wildcard: true, delimiter: '::', maxListeners: 100 })
  ) {}
  protected mediator: Mediator = new _Mediator(this.relations, this.emitter)
}
