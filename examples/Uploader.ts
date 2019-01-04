import { Colleague } from '../dist'

class Uploader extends Colleague {
  upload(...args) {
    this.emit('log', 'started upload with args: ', ...args)
    return new Promise((resolve) => {
      // some upload operation that returns a promise...
      setTimeout(() => {
        resolve({
          someData: [1, 2, 3, 4, 5]
        })
      }, 3000)
    })
  }
}

export default Uploader
