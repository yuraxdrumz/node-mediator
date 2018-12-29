export const randomString = (): string => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let str = ''
  let randLength = Math.floor(Math.random() * 8) + 5
  let randomLengthArr = new Array(randLength)
  for (let n of randomLengthArr) {
    let randChar = Math.floor(Math.random() * chars.length)
    str += chars[randChar]
  }
  return str
}
