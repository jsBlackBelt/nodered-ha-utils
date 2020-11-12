import { assert } from 'chai';
import { mostFrequentElement } from '../src/index';

describe('mostFrequentElement', () => {
  it('should return MFI', () => {
    const arr = ['a', 'b', 3, 4, 3, 3, 3, 'a', 'a', 'a', 'a'];
    const [mfi, count] = mostFrequentElement(arr);
    assert.equal(mfi, 'a');
    assert.equal(count, 5);
  })

  it('should return last element MFI on tie', () => {
    const arr = ['a', 'b', 3, 4, 3, 3, 3, 'a', 'a', 'a'];
    const [mfi, count] = mostFrequentElement(arr);
    assert.equal(mfi, 'a');
    assert.equal(count, 4);
  })

  it('should return null', () => {
    const arr = [];
    const [mfi, count] = mostFrequentElement(arr);
    assert.isNull(mfi);
    assert.equal(count, 0);
  })

  it('should return the single element', () => {
    const arr = ['a'];
    const [mfi, count] = mostFrequentElement(arr);
    assert.equal(mfi, 'a');
    assert.equal(count, 1);
  })

});
