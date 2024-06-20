const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 2 when called with 1 and 1', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
  });
  it('should return 3 when called with 2 and 1', () => {
    assert.strictEqual(calculateNumber(2, 1), 3);
  });
  it('should return 4 when called with 3 and 1', () => {
    assert.strictEqual(calculateNumber(3, 1), 4);
  });
});
