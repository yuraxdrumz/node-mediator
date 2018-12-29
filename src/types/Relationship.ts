import { EventBoolean } from '../types/EventBoolean'

export type RelationshipObject = {
  readonly [key: string]: {
    on: EventBoolean
    emit: EventBoolean
  }
}
