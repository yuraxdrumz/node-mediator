import { Mediator, Colleague, ConcreteMediator, Listener, Emitter } from './declarations'
import { EventEmitter2 } from 'eventemitter2'

class EventEmitter extends EventEmitter2 implements Emitter {
    constructor(options){
      super(options)
    }
    on(event: string | string[], listener: Listener){
      return super.on(event, listener)
    }
  
    emit(event: string | string[], ...values: any[]){
      return super.emit(event, ...values)
    }  
}


class ClassAColleague extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }
}

class ClassBColleague extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }
}

// add facade class to abstract complexity...
(function main() {
    const emitter = new EventEmitter({ wildcard: true })
    const mediator = new ConcreteMediator(emitter);
    const a = new ClassAColleague(mediator);
    const b = new ClassBColleague(mediator);

    b.on('start', (...args)=>console.log(...args))
    a.emit('start', 'job');

    b.on('finished', (...args)=>console.log(...args))
    a.on('finished', (...args)=>console.log(...args))
    b.emit('finished', [{test:true}]);

})();