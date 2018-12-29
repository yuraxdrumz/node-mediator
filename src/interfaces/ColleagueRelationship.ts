import { Colleague } from '../abstracts/Colleague'
import { Relationship } from '../types/Relationship'

export interface ColleagueRelationship {
  readonly relationship: Relationship
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
