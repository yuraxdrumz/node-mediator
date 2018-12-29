import { ClassAColleague, ClassBColleague } from './implementations/ExampleClasses'
import { ConcreteMediator } from './implementations/ConcreteMediator'
import { ConcreteEmitter } from './implementations/ConcreteEmitter'
import { ConcreteRelationship } from './implementations/ConcreteRelationship'
// facade class to abstract start complexity...
// Here you define your desired behavior
export class Setup {
  run() {
    // create an emitter instance that adheres to Emitter interface
    const emitter = new ConcreteEmitter({ wildcard: true })
    const colleagueRelationship = new ConcreteRelationship()
    // pass emitter to mediator
    const mediator = new ConcreteMediator(emitter, colleagueRelationship)
    // pass mediator and name to colleague
    const a = new ClassAColleague(mediator, 'A')
    const b = new ClassBColleague(mediator, 'B')
    // register colleagues
    // mediator.register(a)
    mediator.register(b)
    // define sequence of events. Only events defined in mediator relationshipMap will be allowed
    // All unregistered colleagues and non existing events in realationshipMap will be ignored
    b.on('start', (...args) => console.log(...args))
    a.emit('start', 'job')

    b.on('finished', (...args) => console.log(...args))
    a.on('finished', (...args) => console.log(...args))
    b.emit('finished', [{ test: true }])
    a.emit('finished', [{ test: true }])
  }
}
