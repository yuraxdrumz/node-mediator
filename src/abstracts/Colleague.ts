import * as Types from '../types/Listener'
import Mediator from '../interfaces/Mediator'
import { v4 } from 'uuid'
import { ColleagueName } from '../types/Colleague'

// a colleague is an abstract class that you inherit from with on and emit in place
export default abstract class Colleague {
  private mediator: Mediator
  private readonly id: string
  public readonly name: ColleagueName
  constructor(mediator: Mediator, name: ColleagueName) {
    this.mediator = mediator
    this.id = v4()
    this.name = name
  }

  emit(event: string, ...args: any[]): void {
    this.mediator.emit(this, event, ...args)
  }

  on(event: string, cb: Types.Listener): void {
    this.mediator.on(this, event, cb)
  }
  register() {
    this.mediator.register(this)
  }
}
