import { assert } from 'chai';
import { mapSpecsToServiceCalls } from '../src/index';

describe('mapSpecsToServiceCalls', () => {
  it('should return an empty array', () => {
    const specs = [];
      
    const calls = mapSpecsToServiceCalls(specs);
    assert.equal(calls.length, 0);
  });
  
  it('should return all currently off entities', () => {
    const specs = [
        {desiredState: 'on', entity: {state: 'on', entity_id: 'entity_1'}},
        {desiredState: 'on', entity: {state: 'off', entity_id: 'entity_2'}},
        {desiredState: 'on', entity: {state: 'off', entity_id: 'entity_3'}},
    ];
      
    const calls = mapSpecsToServiceCalls(specs);
    assert.equal(calls.length, 2);
    assert.equal(calls[0].data.entity_id, 'entity_2');
    assert.equal(calls[0].service, 'turn_on');
  });

});
