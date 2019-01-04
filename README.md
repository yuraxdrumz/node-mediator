# node-mediator

node-mediator implements the mediator design pattern with events. It supports creating decoupled components(called colleagues) which all interact through one component(called mediator) through events. If you have large projects with a lot of dependencies between them, this is the library for you.

Why should you use this library?

- When you have to many components communicating with one another, using a mediator with events will make your development times quicker and building new fetures easier.
- Easier to follow the S.O.L.I.D principles as you have fewer intercomponent dependencies and a better view of the hierarchy of your components

### Installation

Install the dependencies

```sh
npm install node-mediator -S
or
yarn add node-mediator
```

### Usage

```js
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
```

## License

MIT
