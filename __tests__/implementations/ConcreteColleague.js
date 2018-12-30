'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
exports.__esModule = true
var Relationship_1 = require('../../src/defaults/Relationship')
var ConcreteEmitter_1 = require('../../src/implementations/ConcreteEmitter')
var ConcreteMediator_1 = require('../../src/implementations/ConcreteMediator')
var ConcreteRelationship_1 = require('../../src/implementations/ConcreteRelationship')
var Colleague_1 = require('../../src/abstracts/Colleague')
var randomString_1 = require('../../src/utils/randomString')
describe('Colleague suite', function() {
  var ConcreteColleague = /** @class */ (function(_super) {
    __extends(ConcreteColleague, _super)
    function ConcreteColleague() {
      return (_super !== null && _super.apply(this, arguments)) || this
    }
    return ConcreteColleague
  })(Colleague_1['default'])
  var instance
  var emitter
  var colRelationship
  var col
  beforeEach(function() {
    emitter = new ConcreteEmitter_1['default']({ wildcard: true })
    colRelationship = new ConcreteRelationship_1['default'](Relationship_1['default'])
    instance = new ConcreteMediator_1['default'](emitter, colRelationship)
    col = new ConcreteColleague(instance, randomString_1['default']())
  })
  it('should create new instance of a colleague', function() {
    expect.assertions(1)
    expect(col).toBeInstanceOf(Colleague_1['default'])
  })
  it('should register itself to the _colleagues map', function() {
    expect.assertions(1)
    col.register()
    expect(colRelationship.checkColleagueExists(col)).toBe(true)
  })
  it('should not register itself to the _colleagues map', function() {
    expect.assertions(1)
    expect(colRelationship.checkColleagueExists(col)).toBe(false)
  })
})
