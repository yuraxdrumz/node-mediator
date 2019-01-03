import relationship from '../../src/defaults/Relations'
import ConcreteEmitter from '../../src/implementations/ConcreteEmitter'
import ConcreteMediator from '../../src/implementations/ConcreteMediator'
import ConcreteRelationship from '../../src/implementations/ConcreteRelations'
import Emitter from '../../src/interfaces/Emitter'
import Mediator from '../../src/interfaces/Mediator'
import ColleagueRelationship from '../../src/interfaces/ColleagueRelations'

describe('Mediator suite', () => {
  let instance: Mediator
  let emitter: Emitter
  let colRelationship: ColleagueRelationship
  beforeEach(() => {
    emitter = new ConcreteEmitter({ wildcard: true })
    colRelationship = new ConcreteRelationship(relationship)
    instance = new ConcreteMediator(emitter, colRelationship)
  })
  it('should create new instance of a mediator', (): void => {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteMediator)
  })
})
