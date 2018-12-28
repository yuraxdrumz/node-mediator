import { EventEmitter2 } from 'eventemitter2'
import { Mediator, Emitter } from './interfaces'
import { Colleague } from './abstracts'
import { Listener } from './types'

class ConcreteMediator implements Mediator {
    emitter: Emitter
    constructor(emitter: Emitter) {
        this.emitter = emitter
    }
    on(event: string, cb: Listener) {
        this.emitter.on(event, cb);
    }
    emit(event: string, ...args: any[]): void {
        this.emitter.emit(event, ...args)
    }
}

class EventEmitter extends EventEmitter2 implements Emitter {
    constructor(options) {
        super(options)
    }
    on(event: string | string[], listener: Listener) {
        return super.on(event, listener)
    }

    emit(event: string | string[], ...values: any[]) {
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

export {
    ClassAColleague,
    ClassBColleague,
    EventEmitter,
    ConcreteMediator
}


