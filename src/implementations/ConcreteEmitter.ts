import { EventEmitter2 } from 'eventemitter2'
import Emitter from '../interfaces/Emitter'

// an implemenatation of the emitter interface with extension of a wildcard supported event emitter
export default class ConcreteEmitter extends EventEmitter2 implements Emitter {}
