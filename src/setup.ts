import { ClassAColleague, ClassBColleague } from './implementations/ExampleClasses'
import { ConcreteMediator } from './implementations/ConcreteMediator'
import { EventEmitter } from './implementations/EventEmitter'

// facade class to abstract start complexity...
// Here you define your desired behavior
export class Setup {
  run() {
    const emitter = new EventEmitter({ wildcard: true })
    const mediator = new ConcreteMediator(emitter)
    const a = new ClassAColleague(mediator)
    const b = new ClassBColleague(mediator)

    b.on('start', (...args) => console.log(...args))
    a.emit('start', 'job')

    b.on('finished', (...args) => console.log(...args))
    a.on('finished', (...args) => console.log(...args))
    b.emit('finished', [{ test: true }])
  }
}
