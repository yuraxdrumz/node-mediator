import { Colleague } from '../abstracts/Colleague'
import { RelationshipObject } from '../types/Relationship'

export interface ColleagueRelationship {
  readonly relationship: RelationshipObject
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
