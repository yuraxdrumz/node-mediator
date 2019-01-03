// types
import {
  ColleagueMap as _ColleagueMap,
  ColleagueName as _ColleagueName
} from './src/types/Colleague'
import { Relations as _RelationsMap } from './src/types/Relations'

// interfaces
import Mediator from './src/interfaces/Mediator'
import Emitter from './src/interfaces/Emitter'
import ColleagueRelations from './src/interfaces/ColleagueRelations'

// concretes
import NodeMediator from './src/main'
import Colleague from './src/abstracts/Colleague'

export declare type ColleagueMap = _ColleagueMap
export declare type ColleagueName = _ColleagueName
export declare type RelationsMap = _RelationsMap

export { NodeMediator, Colleague, ColleagueRelations, Emitter, Mediator }
