import { Mediator } from '../interfaces/Mediator'
import { Colleague } from '../abstracts/Colleague'
import { ColleagueName } from '../types/ColleagueName'

// here are a few example classes that extend the Colleague abstract class to inherit on and emit.
class ClassAColleague extends Colleague {
  constructor(mediator: Mediator, name: ColleagueName) {
    super(mediator, name)
  }
}

class ClassBColleague extends Colleague {
  constructor(mediator: Mediator, name: ColleagueName) {
    super(mediator, name)
  }
}

export { ClassAColleague, ClassBColleague }
