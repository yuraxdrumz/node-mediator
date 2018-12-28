import * as Types from '../types/Listener'

// an emitter interface to avoid Dependency Inversion Principle(S.O.L.I.D)
export interface Emitter {
  on(event: string | string[], listener: Types.Listener): this
  emit(event: string | string[], ...values: any[]): boolean
}
