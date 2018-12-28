import { Mediator } from '../interfaces/Mediator'
import { Listener } from '../types/Listener'
import { Emitter } from '../interfaces/Emitter'
// an instance of a mediator which accepts an emitter interface implementor
export class ConcreteMediator implements Mediator {
  emitter: Emitter
  constructor(emitter: Emitter) {
    this.emitter = emitter
  }
  on(event: string, cb: Listener) {
    this.emitter.on(event, cb)
  }
  emit(event: string, ...args: any[]): void {
    this.emitter.emit(event, ...args)
  }
}
