import { EventBoolean } from '../types/EventBoolean'

export type Relationship = {
  readonly [key: string]: {
    on: EventBoolean
    emit: EventBoolean
  }
}
