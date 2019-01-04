import { Colleague } from '../dist'

class Tester extends Colleague {
  test() {
    this.emit('log', 'test emitted!')
  }
}

export default Tester
