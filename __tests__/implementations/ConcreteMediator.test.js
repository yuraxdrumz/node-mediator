'use strict'
exports.__esModule = true
var Relationship_1 = require('../../src/defaults/Relationship')
var ConcreteEmitter_1 = require('../../src/implementations/ConcreteEmitter')
var ConcreteMediator_1 = require('../../src/implementations/ConcreteMediator')
var ConcreteRelationship_1 = require('../../src/implementations/ConcreteRelationship')
describe('Mediator suite', function() {
  var instance
  var emitter
  var colRelationship
  beforeEach(function() {
    emitter = new ConcreteEmitter_1['default']({ wildcard: true })
    colRelationship = new ConcreteRelationship_1['default'](Relationship_1['default'])
    instance = new ConcreteMediator_1['default'](emitter, colRelationship)
  })
  it('should create new instance of a mediator', function() {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteMediator_1['default'])
  })
})
