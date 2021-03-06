import * as Types from '../types/Listener'
import Mediator from '../interfaces/Mediator'
import { ColleagueName } from '../types/Colleague'

abstract class Colleague {
  private mediator: Mediator
  public readonly name: ColleagueName
  constructor(name: ColleagueName, mediator: Mediator) {
    this.mediator = mediator
    this.name = name
  }
  emit(event: string, ...args: any[]) {
    return this.mediator.emit(this, event, ...args)
  }
  emitAsync(event: string, ...args: any[]): Promise<any> {
    return this.mediator.emitAsync(this, event, ...args)
  }
  on(event: string, cb: Types.Listener): Promise<any> | void {
    return this.mediator.on(this, event, cb)
  }
  register() {
    this.mediator.register(this)
  }
}

export default Colleague
