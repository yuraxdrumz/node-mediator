import { ColleagueName } from '../types/Colleague'
import { Relations } from '../types/Relations'
import Colleague from '../abstracts/Colleague'

export default interface ColleagueRelations {
  readonly relationship: Relations
  onEventExists(colleague: Colleague, event: string): boolean
  emitEventExists(colleague: Colleague, event: string): boolean
  checkColleagueExists(colleague: Colleague): boolean
  register(colleague: Colleague): void | Error
}
