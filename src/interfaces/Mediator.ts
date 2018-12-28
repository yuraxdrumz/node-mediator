import * as Types from '../types/Listener'
import { Emitter } from './Emitter'
// a mediator interface which adheres to the emitter interface
export interface Mediator {
  emitter: Emitter
  emit(event: string, ...args: any[]): void
  on(event: string, cb: Types.Listener): void
}
