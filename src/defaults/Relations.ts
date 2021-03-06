import RelationsMap from '../types/Relations'

const relations: RelationsMap = {
  logger: {
    on: { 'logger::*': true },
    emit: {
      'logger::start': true,
      'logger::end': true
    }
  },
  timer: {
    on: { 'timer::*': true },
    emit: { 'timer::start': true, 'timer::test': true }
  },
  'promise-tester': {
    on: { 'promise-tester::test': true },
    emit: { 'promise-tester::test': true }
  }
}

export default relations
