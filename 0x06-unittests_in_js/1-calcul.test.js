import {calculateNumber} from './1-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
    it('should return 2 when called with 1 and 1', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
    });
    it('should return 3 when called with 2 and 1', () => {
        assert.strictEqual(calculateNumber('SUM',2, 1), 3);
    });
    it('should return 4 when called with 3 and 1', () => {
        assert.strictEqual(calculateNumber('SUM',3, 1), 4);
    });
    it('should return 1 when called with 2 and 1', () => {
        assert.strictEqual(calculateNumber('SUBTRACT',2, 1), 1);
    });
    it('should return 2 when called with 3 and 1', () => {
        assert.strictEqual(calculateNumber('SUBTRACT',3, 1), 2);
    });
    it('should return 3 when called with 4 and 1', () => {
        assert.strictEqual(calculateNumber('SUBTRACT',4, 1), 3);
    });
    it('should return 2 when called with 4 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE',4, 2), 2);
    });
    it('should return 1 when called with 3 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE',3, 2), 1.5);
    });
    it('should return 1 when called with 2 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE',2, 2), 1);
    });
    it('should return Error when called with 2 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE',2, 0), 'Error');
    });
    it('should return Error when called with 0 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE',0, 0), 'Error');
    });
    it('should return Error when called with 0 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE',0, 2), 0);
    });
    it('should return Error when called with 0 and 2.2', () => {
        assert.strictEqual(calculateNumber(0,'DIVIDE', 2.2), "Error");
    });
});