import { ColleagueName } from '../types/Colleague'
import { Relationship } from '../types/Relationship'
import Colleague from '../abstracts/Colleague'

export default interface ColleagueRelationship {
  readonly relationship: Relationship
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
