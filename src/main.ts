import ConcreteMediator from './implementations/ConcreteMediator'
import ConcreteEmitter from './implementations/ConcreteEmitter'
import ConcreteRelationship from './implementations/ConcreteRelations'
import { Relations } from './types/Relations'
// facade class to abstract start complexity...
export default abstract class NodeMediator {
  constructor(private readonly relations: Relations) {}
  private emitter: ConcreteEmitter = new ConcreteEmitter({ wildcard: true, delimiter: '::' })
  private colleagueRelations: ConcreteRelationship = new ConcreteRelationship(this.relations)
  protected mediator: ConcreteMediator = new ConcreteMediator(this.emitter, this.colleagueRelations)
}
