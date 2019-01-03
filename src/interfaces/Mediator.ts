import * as Types from '../types/Listener'
import Emitter from './Emitter'
import Colleague from '../abstracts/Colleague'
import RelationsMap from '../types/Relations'
import { ColleagueMap } from '../types/Colleague'

// a mediator interface(a contract with the emitter interface)
export default interface Mediator {
  emitter: Emitter
  relations: RelationsMap
  colleagues: ColleagueMap
  emit(colleague: Colleague, event: string, ...args: any[]): void
  emitAsync(colleague: Colleague, event: string, ...args: any[]): Promise<any>
  on(colleague: Colleague, event: string, cb: Types.Listener): void
  register(colleague: Colleague): void
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
