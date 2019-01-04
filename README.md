# node-mediator

node-mediator implements the mediator design pattern with events. It supports creating decoupled components(called colleagues) which all interact through one component(called mediator) through events. If you have large projects with a lot of dependencies between components, this is the library for you.

Why should you use this library?

- When you have many components communicating with one another, using a mediator with events will make your development times quicker and building new fetures easier and faster as everything is decoupled.
- Easier to follow the S.O.L.I.D principles as you have fewer intercomponent dependencies and a better view of the hierarchy of your components.
- Simpler to test your components.
- Ensures strictness between inter-component communication.
- Uses [eventemitter2](https://github.com/EventEmitter2/EventEmitter2) library by default(it is overridable if you implement the Emitter interface and pass it as a 2nd argument to the mediator initialization)

### Installation

```sh
npm install node-mediator -S
or
yarn add node-mediator
```

### Examples

you can find an example of usage in the examples folder found [here](https://github.com/yuraxdrumz/node-mediator/tree/master/examples)

## relations.ts

used by the mediator to restrict inter-component commumnication

```ts
import { RelationsMap } from 'node-mediator'
// tester, uploader and logger are our class that extended the Colleague abstract class
// each colleague implementation has on and emit objects which accept strings of events names as keys and booleans as values.
// in our case it means that tester is allowed to fire a test event and receive a test event, etc.
const relations: RelationsMap = {
  tester: {
    on: { test: true },
    emit: { test: true }
  },
  uploader: {
    on: { upload: true },
    emit: { upload: true }
  },
  logger: {
    on: { log: true },
    emit: { upload: true }
  }
}

export default relations
```

### Logger.ts

```ts
import { Colleague } from 'node-mediator'
// our logger extends Colleague, therefore has .on, .emit, .emitAsync and .register on its prototype.
// we define our methods here and we will register them later. If you want to emit an event to some other component you simply use the this.emit or this.emitAsync if you need to await the answer.
class Logger extends Colleague {
  log(...args) {
    // our emit will only happen if it allowed in our relations map!
    this.emit('upload', { someArumentToUpload: true })
    console.log('logger: ', ...args)
  }
}
export default Logger
```

### Main.ts

```ts
import { NodeMediator } from 'node-mediator'
import relations from './relations'
import Tester from './Tester'
import Logger from './Logger'
import Uploader from './Uploader'

class Main {
  async run() {
    // our mediator is a singleton, first time we call .getInstance with our relations map to initialize the mediator
    const mediator = NodeMediator.getInstance(relations)
    /*
      subsequent calls to getInstance will ignore any params and return our mediator singleton
      NodeMediator.getInstance() -> mediator
    */

    // we call our extended Colleagues with their name and we pass the mediator singleton to them
    const tester = new Tester('tester', mediator)
    const logger = new Logger('logger', mediator)
    const uploader = new Uploader('uploader', mediator)

    // register the extended Colleagues.
    tester.register()
    logger.register()
    uploader.register()

    // define events. Only events defined in relationsMap will be allowed!
    logger.on('log', logger.log)
    tester.on('test', tester.test)
    uploader.on('upload', uploader.upload)

    // example emit
    tester.emit('test')
    /*
      we can also call .emitAsync. If you have a lot of async operations 
      but you still want them decoupled, you can use .emitAsync, 
      .emitAsync uses promise.all to resolve all listeners promises and return all values.
     */

    // we defined our tester and uplaoder to allow firing upload
    const uploaded = await uploader.emitAsync('upload', 'some data for upload...')
    console.log(uploaded)
  }
}
new Main().run()
```

## License

MIT
