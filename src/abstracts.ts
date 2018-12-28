import * as Types from './types'
import { Mediator } from './interfaces'

// a colleague is an abstract class because you only need to inherit from it and not adhere to an interface of it
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
