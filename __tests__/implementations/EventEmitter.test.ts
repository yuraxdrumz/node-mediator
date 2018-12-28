import { EventEmitter } from '../../src/implementations/EventEmitter'

let randomString = (chars: string): string => {
    let str = ''
    let randLength = Math.floor(Math.random() * 8) + 5
    let randomLengthArr = new Array(randLength)
    for(let n of randomLengthArr){
        let randChar = Math.floor(Math.random() * chars.length)
        str += chars[randChar]
    }
    return str
}

describe('Emitter suite', (): void => {
    let instance: EventEmitter
    beforeEach(()=>{
        instance = new EventEmitter({})
    })
    it('should create new instance of event emitter', (): void => {
        expect.assertions(1)
        expect(instance).toBeInstanceOf(EventEmitter)
    })
    it('should subscribe to a random event and fire that event with a random array', (): void => {
        expect.assertions(1)
        let randomData = new Array(Math.floor(Math.random() * 10000)).map((i: any): number => Math.floor(Math.random() * 100))
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let str = randomString(chars)
        instance.on(str, (dataArray)=>{
            expect(dataArray).toEqual(randomData)
        })
        instance.emit(str, randomData)
    })
})

