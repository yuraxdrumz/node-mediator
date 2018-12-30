'use strict'
exports.__esModule = true
var ConcreteRelationship_1 = require('../../src/implementations/ConcreteRelationship')
var randomString_1 = require('../../src/utils/randomString')
describe('Relationship suite', function() {
  var instance
  var colleagueName
  beforeEach(function() {
    var _a
    colleagueName = randomString_1['default']()
    var defaultRelationship = ((_a = {}),
    (_a[colleagueName] = {
      on: { onTest: true },
      emit: { testEvent: true }
    }),
    _a)
    instance = new ConcreteRelationship_1['default'](defaultRelationship)
  })
  it('should create new instance of ConcreteRelationship', function() {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteRelationship_1['default'])
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
