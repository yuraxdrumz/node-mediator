
interface Listener {
  (...values: any[]): void;
}

interface Emitter {
  on(event: string | string[], listener: Listener): this;
  emit(event: string | string[], ...values: any[]): boolean;
}


interface Mediator {
  emitter: Emitter
  emit(event: string, ...args: any[]): void;
  on(event: string, cb: Listener): void;
}



class ConcreteMediator implements Mediator {
  emitter: Emitter
  constructor(emitter: Emitter){
    this.emitter = emitter
  }
  on(event: string, cb: Listener) {
    this.emitter.on(event, cb);
  }
  emit(event: string, ...args: any[]): void {
    this.emitter.emit(event, ...args)
  }
}

abstract class Colleague {
  mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  emit(event: string, ...args: any[]): void {
    this.mediator.emit(event, ...args);
  };

  on(event: string, cb: Listener): void {
    this.mediator.on(event, cb)
  };
}

export {
  Mediator,
  Colleague,
  ConcreteMediator,
  Listener,
  Emitter
}