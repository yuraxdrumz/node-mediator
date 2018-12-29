import Colleague from '../abstracts/Colleague'

// here are a few example classes that extend the Colleague abstract class to inherit on and emit.
class Logger extends Colleague {
  log(message, ...args) {
    console.log(message, ...args)
  }
}

class A extends Colleague {}

export { Logger, A }
