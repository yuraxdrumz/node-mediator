import { Logger, Timer } from './implementations/ConcreteClasses'
import ConcreteMediator from './implementations/ConcreteMediator'
import ConcreteEmitter from './implementations/ConcreteEmitter'
import ConcreteRelationship from './implementations/ConcreteRelationship'
import relationship from './defaults/Relationship'
// facade class to abstract start complexity...
// Here you define your desired behavior
export class Setup {
  run() {
    // create an emitter instance that adheres to Emitter interface
    const emitter = new ConcreteEmitter({ wildcard: true })
    // create relationship with option to pass relationship object type
    const colleagueRelationship = new ConcreteRelationship(relationship)
    // pass emitter and relationship manager to mediator
    const mediator = new ConcreteMediator(emitter, colleagueRelationship)
    // pass mediator and name to colleagues
    const timer = new Timer(mediator, 'timer')
    const logger = new Logger(mediator, 'logger')
    // register colleagues
    timer.register()
    logger.register()
    // define sequence of events. Only events defined in mediator relationshipMap will be allowed
    // All unregistered colleagues and non existing events in realationshipMap will be ignored
    timer.on('*', timer.time)
    logger.on('*', logger.log)
    timer.emit('start', 'start!')
    timer.emit('tessss')
    setTimeout(() => {
      timer.emit('test', 'test!')
    }, 1000)
  }
}
