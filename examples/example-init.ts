import { NodeMediator, Colleague, RelationsMap } from './dist'

class Tester extends Colleague {
  test() {
    console.log('test emitted!')
  }
}

class Logger extends Colleague {
  log(...args) {
    console.log('logger', ...args)
  }
}

class Main extends NodeMediator {
  constructor(relations: RelationsMap) {
    super(relations)
  }
  run() {
    // add the components
    let tester = new Tester('tester', this.mediator)
    let logger = new Logger('logger', this.mediator)

    // register them. If you want to test something without a specific component just comment it out, otherwise you have to register the compoennt to use it.
    tester.register()
    logger.register()

    // defined events. Only events defined in relationsMap will be allowed!
    logger.on('**', logger.log)
    tester.on('tester::test', tester.test)

    // example emit
    setTimeout(() => {
      tester.emit('tester::test')
    }, 3000)
  }
}

/*
here is the relationsMap, we will define allowed on and emit events
if you want to disable an event, change it to false. Events .on support wildcards and seperates events by delimiter ::
if you have a component named `uploader` and you want to add a start event to it when it is called and emit a finish event when its done, do this:
const exampleRelations: RelationsMap = {
    uploader: {
        on: {'uploader::start': true},
        emit: {'uploader::finish': true}
    },
}

The reason you have to give full namespaces is because all components can talk to each other if you defined so in you map, for example:
const exampleRelations: RelationsMap = {
    uploader: {
        on: {'uploader::start': true},
        emit: {'uploader::finish': true}
    },
    // this will also fire on upload start event and do its thing.
    scanner: {
        on: {'uploader::start': true},
        emit: {}
    }
}

 */
const myRelations: RelationsMap = {
  tester: {
    on: { 'tester::test': true },
    emit: { 'tester::test': true }
  },
  logger: {
    on: { '**': true },
    emit: {}
  }
}

new Main(myRelations).run()
