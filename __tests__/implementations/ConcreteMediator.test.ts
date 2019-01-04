import relations from '../../src/defaults/Relations'
import ConcreteEmitter from '../../src/implementations/ConcreteEmitter'
import ConcreteMediator from '../../src/implementations/ConcreteMediator'
import Emitter from '../../src/interfaces/Emitter'
import Mediator from '../../src/interfaces/Mediator'

describe('Mediator suite', () => {
  let instance: Mediator
  let emitter: Emitter
  beforeEach(() => {
    emitter = new ConcreteEmitter({ wildcard: true })
    instance = new ConcreteMediator(relations, {}, emitter)
  })
  it('should create new instance of a mediator', (): void => {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteMediator)
  })
})
