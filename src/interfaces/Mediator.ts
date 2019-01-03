import * as Types from '../types/Listener'
import Emitter from './Emitter'
import Colleague from '../abstracts/Colleague'
import ColleagueRelationship from './ColleagueRelations'

// a mediator interface(a contract with the emitter interface)
export default interface Mediator {
  emitter: Emitter
  relationship: ColleagueRelationship
  emit(colleague: Colleague, event: string, ...args: any[]): void
  emitAsync(colleague: Colleague, event: string, ...args: any[]): Promise<any>
  on(colleague: Colleague, event: string, cb: Types.Listener): void
  register(colleague: Colleague): void
}
