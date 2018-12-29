import ConcreteEmitter from '../../src/implementations/ConcreteEmitter'
import randomString from '../../src/utils/randomString'

describe('Emitter suite', (): void => {
  let instance: ConcreteEmitter
  beforeEach(() => {
    instance = new ConcreteEmitter({})
  })
  it('should create new instance of event emitter', (): void => {
    expect.assertions(1)
    expect(instance).toBeInstanceOf(ConcreteEmitter)
  })
  it('should subscribe to a random event and fire that event with a random array', (): void => {
    expect.assertions(1)
    let randomData = new Array(Math.floor(Math.random() * 10000)).map(
      (i: any): number => Math.floor(Math.random() * 100)
    )

    let str = randomString()
    instance.on(str, (dataArray) => {
      expect(dataArray).toEqual(randomData)
    })
    instance.emit(str, randomData)
  })
})
