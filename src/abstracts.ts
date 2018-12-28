import * as Types from './types'
import { Mediator } from './interfaces'

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
