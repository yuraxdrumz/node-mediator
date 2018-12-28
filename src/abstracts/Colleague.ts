import * as Types from '../types/Listener'
import { Mediator } from '../interfaces/Mediator'

// a colleague is an abstract class that you inherit from with on and emit in place
export abstract class Colleague {
  mediator: Mediator

  constructor(mediator: Mediator) {
    this.mediator = mediator
  }

  emit(event: string, ...args: any[]): void {
    this.mediator.emit(event, ...args)
  }

  on(event: string, cb: Types.Listener): void {
    this.mediator.on(event, cb)
  }
}
