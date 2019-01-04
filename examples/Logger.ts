import { Colleague } from '../dist'

class Logger extends Colleague {
  log(...args) {
    console.log('logger: ', ...args)
  }
}

export default Logger
