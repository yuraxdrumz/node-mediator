import * as Types from '../types/Listener'
import Colleague from '../abstracts/Colleague'

// a mediator interface(a contract with the emitter interface)
export default interface Mediator {
  emit(colleague: Colleague, event: string, ...args: any[]): boolean
  emitAsync(colleague: Colleague, event: string, ...args: any[]): Promise<any>
  on(colleague: Colleague, event: string, cb: Types.Listener): void
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
