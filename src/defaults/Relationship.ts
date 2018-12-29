import { Relationship } from '../types/Relationship'

const relationship: Relationship = {
  logger: {
    on: { '*': true },
    emit: {}
  },
  timer: {
    on: { '*': true },
    emit: { start: true, test: true }
  }
  // B: {
  //   on: { start: true, finished: true },
  //   emit: { finished: true }
  // }
}

export default relationship
