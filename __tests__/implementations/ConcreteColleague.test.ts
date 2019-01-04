import relations from '../../src/defaults/Relations'
import ConcreteEmitter from '../../src/implementations/ConcreteEmitter'
import ConcreteMediator from '../../src/implementations/ConcreteMediator'
import Emitter from '../../src/interfaces/Emitter'
import Mediator from '../../src/interfaces/Mediator'
import Colleague from '../../src/abstracts/Colleague'
import randomString from '../../src/utils/randomString'

describe('Colleague suite', () => {
  class ConcreteColleague extends Colleague {}
  let instance: Mediator
  let emitter: Emitter
  let col: Colleague
  beforeEach(() => {
    emitter = new ConcreteEmitter({ wildcard: true })
    instance = new ConcreteMediator(relations, emitter)
    col = new ConcreteColleague(randomString(), instance)
  })
  it('should create new instance of a colleague', (): void => {
    expect.assertions(1)
    expect(col).toBeInstanceOf(Colleague)
  })
  it('should register itself to the _colleagues map', (): void => {
    expect.assertions(1)
    col.register()
    expect(instance.checkColleagueExists(col)).toBe(true)
  })
  it('should not register itself to the _colleagues map', (): void => {
    expect.assertions(1)
    expect(instance.checkColleagueExists(col)).toBe(false)
  })
})
