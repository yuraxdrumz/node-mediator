import { Relationship } from '../types/Relationship'

const relationship: Relationship = {
  logger: {
    on: { '*': true },
    emit: {}
  },
  A: {
    on: { start: true, finished: true },
    emit: { start: true, finished: true }
  }
  // B: {
  //   on: { start: true, finished: true },
  //   emit: { finished: true }
  // }
}

export default relationship
