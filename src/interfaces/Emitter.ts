import * as Types from '../types/Listener'

/*
an emitter interface to adhere the Dependency Inversion Principle(S.O.L.I.D).
High level policies(the mediator in our case) should not depend on low level details(event emitter), that is why we add an interface(a contract).

without our emitter interface(bad): Colleague -> Mediator -> EventEmitter(concrete dependancy)
with our emitter interface(good): Colleague -> Mediator -> EventEmitter(adheres to our Emitter contract) -> Emitter(interface, non changing contract)
*/
export default interface Emitter {
  on(event: string | string[], listener: Types.Listener): this
  emit(event: string | string[], ...values: any[]): boolean
}
