import { Logger, A } from './implementations/ConcreteClasses'
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
    const colleagueRelationship = new ConcreteRelationship(relationship)
    // pass emitter to mediator
    const mediator = new ConcreteMediator(emitter, colleagueRelationship)
    // pass mediator and name to colleague

    const a = new A(mediator, 'A')
    const logger = new Logger(mediator, 'logger')

    a.register()
    logger.register()

    // define sequence of events. Only events defined in mediator relationshipMap will be allowed
    // All unregistered colleagues and non existing events in realationshipMap will be ignored
    logger.on('*', logger.log)
    // test will be ignored as it is not in the relationship map
    a.emit('test', 'blaaa')
    // start and finished will be logged to logger.log
    a.emit('start', 'yessss')
    a.emit('finished', 'finishhhhhh')
  }
}
