import { Mediator } from '../interfaces/Mediator'
import { Colleague } from '../abstracts/Colleague'
import { ColleagueName } from '../types/ColleagueName'

// here are a few example classes that extend the Colleague abstract class to inherit on and emit.
class Logger extends Colleague {
  log(message, ...args) {
    console.log(message, ...args)
  }
}

class A extends Colleague {}

export { Logger, A }
