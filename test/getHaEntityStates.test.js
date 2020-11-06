import { assert } from 'chai';
import { getHaEntityStates } from '../src/index';

const ha = {
  entity1: {
    id: 'entity-1',
  },
  entity2: {
    id: 'entity-2',
  },
  entity3: {
    id: 'entity-3',
  },
}

const specs = [
  {name: 'entity 1', id: 'entity1'},
  {name: 'entity 2', id: 'entity2'},
]
describe('getHaEntityStates', () => {
  it('should return a mapping', () => {
    const state = getHaEntityStates(ha, specs);
    assert.deepEqual(state, { 'entity 1': { id: 'entity-1' }, 'entity 2': { id: 'entity-2' } });
  })
});
