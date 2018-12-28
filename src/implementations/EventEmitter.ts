import { EventEmitter2 } from 'eventemitter2'
import { Emitter } from '../interfaces/Emitter'
import { Listener } from '../types/Listener'

// an implemenatation of the emitter interface with extension of a wildcard supported event emitter
export class EventEmitter extends EventEmitter2 implements Emitter {
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
