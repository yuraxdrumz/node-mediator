import * as Types from '../types/Listener'

/*
an emitter interface to avoid Dependency Inversion Principle(S.O.L.I.D).
High level policies(the mediator in our case) should not depend on low level details(event emitter), that is why we add an interface(a contract).

without our emitter interface(bad): Colleague -> Mediator -> EventEmitter(random dependency, can be changed)
with our emitter interface(good): Colleague -> Mediator -> Emitter(stable, non changing contract)
*/
export interface Emitter {
  on(event: string | string[], listener: Types.Listener): this
  emit(event: string | string[], ...values: any[]): boolean
}
