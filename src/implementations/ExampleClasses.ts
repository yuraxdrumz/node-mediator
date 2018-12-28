import { Mediator } from '../interfaces/Mediator'
import { Colleague } from '../abstracts/Colleague'

// here are a few example classes that extend the Colleague abstract class to inherit on and emit.
class ClassAColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator)
  }
}

class ClassBColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator)
  }
}

export { ClassAColleague, ClassBColleague }
