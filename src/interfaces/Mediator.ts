import * as Types from '../types/Listener'
import { Emitter } from './Emitter'
import { Colleague } from '../abstracts/Colleague'
import { ColleagueRelationship } from './ColleagueRelationship'
// a mediator interface(a contract with the emitter interface)
export interface Mediator {
  emitter: Emitter
  relationship: ColleagueRelationship
  emit(colleague: Colleague, event: string, ...args: any[]): void
  on(colleague: Colleague, event: string, cb: Types.Listener): void
  register(colleague: Colleague): void
}
