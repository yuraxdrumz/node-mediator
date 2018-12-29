import { ConcreteRelationship } from '../../src/implementations/ConcreteRelationship'
import { randomString } from '../../src/utils/randomString'
import { ColleagueName } from '../../src/types/Colleague'

describe('Relationship suite', (): void => {
  let instance: ConcreteRelationship
  let colleagueName: ColleagueName

  beforeEach(() => {
    colleagueName = randomString()
    let defaultRelationship = {
      [colleagueName]: {
        on: { onTest: true },
        emit: { testEvent: true }
      }
    }
    instance = new ConcreteRelationship(defaultRelationship)
  })
  it('should create new instance of ConcreteRelationship', (): void => {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteRelationship)
  })
  //   it('should return true if a colleagueName was registered to the relationshipMap', ()=>{
  //       expect.assertions(1)
  //       instance.register(colleagueName)
  //       expect(instance.checkColleagueExists(colleagueName)).toBe(true)
  //   })
  //   it('should return false if colleagueName was not registered to the relationshipMap', ()=>{
  //     expect.assertions(1)
  //     expect(instance.checkColleagueExists(colleagueName)).toBe(false)
  // })
  // it('should return false on emit events exist as there are none', ()=>{
  //   expect.assertions(1)
  //   expect(instance.emitEventExists(colleagueName, 'any')).toBe(false)
  // })
  // it('should return false on on events exist as there are none', ()=>{
  //   expect.assertions(1)
  //   expect(instance.onEventExists(colleagueName, 'any')).toBe(false)
  // })
  // it('should return true on emit events exist', ()=>{
  //   expect.assertions(1)
  //   expect(instance.emitEventExists(colleagueName, 'testEvent')).toBe(true)
  // })
  // it('should return true on on events exist', ()=>{
  //   expect.assertions(1)
  //   expect(instance.onEventExists(colleagueName, 'onTest')).toBe(true)
  // })
})
