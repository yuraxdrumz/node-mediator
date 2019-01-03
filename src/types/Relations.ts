import { EventBoolean } from './EventBoolean'

type RelationsMap = {
  [key: string]: {
    on: EventBoolean
    emit: EventBoolean
  }
}

export default RelationsMap
