import { EventBoolean } from './EventBoolean'

export type Relations = {
  readonly [key: string]: {
    on: EventBoolean
    emit: EventBoolean
  }
}
