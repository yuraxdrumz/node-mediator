import * as Types from './types'

export interface Emitter {
  on(event: string | string[], listener: Types.Listener): this
  emit(event: string | string[], ...values: any[]): boolean
}

export interface Mediator {
  emitter: Emitter
  emit(event: string, ...args: any[]): void
  on(event: string, cb: Types.Listener): void
}
