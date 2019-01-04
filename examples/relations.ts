import { RelationsMap } from '../dist'

const relations: RelationsMap = {
  tester: {
    on: { test: true },
    emit: { test: true }
  },
  uploader: {
    on: { upload: true },
    emit: { upload: true }
  },
  logger: {
    on: { log: true },
    emit: { upload: true }
  }
}

export default relations
