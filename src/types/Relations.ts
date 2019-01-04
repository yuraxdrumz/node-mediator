import { RelationsEventMap } from './RelationsEventMap'

type RelationsMap = {
  [key: string]: {
    on: RelationsEventMap
    emit: RelationsEventMap
  }
}

export default RelationsMap
