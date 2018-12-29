import Colleague from '../abstracts/Colleague'

// here are a few example classes that extend the Colleague abstract class to inherit on and emit.
class Logger extends Colleague {
  private event: string
  log(message, ...args) {
    console.log(`LOGGER: event: ${this.event} ${new Date().toISOString()} - `, message, ...args)
  }
}

class Timer extends Colleague {
  private start: [number, number] = process.hrtime()
  private precision: number = 5
  time = () => {
    var elapsed = process.hrtime(this.start)[1] / 1000000 // divide by a million to get nano to milli
    console.log(
      `TIMER: `,
      process.hrtime(this.start)[0] + 's, ' + elapsed.toFixed(this.precision) + 'ms - '
    ) // print message + time
    this.start = process.hrtime() // reset the timer
  }
}

export { Logger, Timer }
