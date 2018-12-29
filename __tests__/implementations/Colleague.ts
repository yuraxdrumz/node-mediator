import { relationship } from '../../src/defaults/Relationship'
import { ConcreteEmitter } from '../../src/implementations/ConcreteEmitter'
import { ConcreteMediator } from '../../src/implementations/ConcreteMediator'
import { ConcreteRelationship } from '../../src/implementations/ConcreteRelationship'
import { Emitter } from '../../src/interfaces/Emitter'
import { Mediator } from '../../src/interfaces/Mediator'
import { ColleagueRelationship } from '../../src/interfaces/ColleagueRelationship'
import { Colleague } from '../../src/abstracts/Colleague'
import { randomString } from '../../src/utils/randomString'

describe('Colleague suite', () => {
  class ConcreteCollege extends Colleague {}
  let instance: Mediator
  let emitter: Emitter
  let colRelationship: ColleagueRelationship
  let col: Colleague
  beforeEach(() => {
    emitter = new ConcreteEmitter({ wildcard: true })
    colRelationship = new ConcreteRelationship(relationship)
    instance = new ConcreteMediator(emitter, colRelationship)
    col = new ConcreteCollege(instance, randomString())
  })
  it('should create new instance of a colleague', (): void => {
    expect.assertions(1)
    expect(col).toBeInstanceOf(Colleague)
  })
  it('should register itself to the _colleagues map', (): void => {
    expect.assertions(1)
    col.register()
    expect(colRelationship.checkColleagueExists(col)).toBe(true)
  })
  it('should not register itself to the _colleagues map', (): void => {
    expect.assertions(1)
    expect(colRelationship.checkColleagueExists(col)).toBe(false)
  })
})
