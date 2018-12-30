'use strict'
exports.__esModule = true
var ConcreteEmitter_1 = require('../../src/implementations/ConcreteEmitter')
var randomString_1 = require('../../src/utils/randomString')
describe('Emitter suite', function() {
  var instance
  beforeEach(function() {
    instance = new ConcreteEmitter_1['default']({})
  })
  it('should create new instance of event emitter', function() {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteEmitter_1['default'])
  })
  it('should subscribe to a random event and fire that event with a random array', function() {
    expect.assertions(1)
    var randomData = new Array(Math.floor(Math.random() * 10000)).map(function(i) {
      return Math.floor(Math.random() * 100)
    })
    var str = randomString_1['default']()
    instance.on(str, function(dataArray) {
      expect(dataArray).toEqual(randomData)
    })
    instance.emit(str, randomData)
  })
})
