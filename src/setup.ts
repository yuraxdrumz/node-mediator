import { Logger, Timer, PromiseTester } from './implementations/ConcreteClasses'
import ConcreteMediator from './implementations/ConcreteMediator'
import ConcreteEmitter from './implementations/ConcreteEmitter'
import ConcreteRelationship from './implementations/ConcreteRelationship'
import relationship from './defaults/Relationship'
// facade class to abstract start complexity...
// Here you define your desired behavior
export class Setup {
  async run() {
    // create an emitter instance that adheres to Emitter interface
    const emitter = new ConcreteEmitter({ wildcard: true, delimiter: '::' })
    // create relationship with option to pass relationship object type
    const colleagueRelationship = new ConcreteRelationship(relationship)
    // pass emitter and relationship manager to mediator
    const mediator = new ConcreteMediator(emitter, colleagueRelationship)
    // pass mediator and name to colleagues
    const pTester = new PromiseTester('promise-tester', mediator)
    const timer = new Timer('timer', mediator)
    const logger = new Logger('logger', mediator)
    // register colleagues
    timer.register()
    logger.register()
    pTester.register()
    // define sequence of events. Only events defined in mediator relationshipMap will be allowed
    // All unregistered colleagues and non existing events in realationshipMap will be ignored
    timer.on('timer::*', timer.time)
    logger.on('logger::*', logger.log)
    pTester.on('promise-tester::test', pTester.test)
    logger.emit('logger::start', 'starting emit async')
    await pTester.emitAsync('promise-tester::test')
    logger.emit('logger::end', 'finished emit async')
    timer.emit('timer::start', 'start!')
  }
}
