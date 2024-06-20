import {calculateNumber} from './1-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
    it('should return 2 when called with 1 and 1', () => {
        assert.strictEqual(calculateNumber(1, 1, 'SUM'), 2);
    });
    it('should return 3 when called with 2 and 1', () => {
        assert.strictEqual(calculateNumber(2, 1, 'SUM'), 3);
    });
    it('should return 4 when called with 3 and 1', () => {
        assert.strictEqual(calculateNumber(3, 1, 'SUM'), 4);
    });
    it('should return 1 when called with 2 and 1', () => {
        assert.strictEqual(calculateNumber(2, 1, 'SUBTRACT'), 1);
    });
    it('should return 2 when called with 3 and 1', () => {
        assert.strictEqual(calculateNumber(3, 1, 'SUBTRACT'), 2);
    });
    it('should return 3 when called with 4 and 1', () => {
        assert.strictEqual(calculateNumber(4, 1, 'SUBTRACT'), 3);
    });
    it('should return 2 when called with 4 and 2', () => {
        assert.strictEqual(calculateNumber(4, 2, 'DIVIDE'), 2);
    });
    it('should return 1 when called with 3 and 2', () => {
        assert.strictEqual(calculateNumber(3, 2, 'DIVIDE'), 1.5);
    });
    it('should return 1 when called with 2 and 2', () => {
        assert.strictEqual(calculateNumber(2, 2, 'DIVIDE'), 1);
    });
    it('should return Error when called with 2 and 0', () => {
        assert.strictEqual(calculateNumber(2, 0, 'DIVIDE'), 'Error');
    });
    it('should return Error when called with 0 and 0', () => {
        assert.strictEqual(calculateNumber(0, 0, 'DIVIDE'), 'Error');
    });
    it('should return Error when called with 0 and 2', () => {
        assert.strictEqual(calculateNumber(0, 2, 'DIVIDE'), 0);
    });
    it('should return Error when called with 0 and 2.2', () => {
        assert.strictEqual(calculateNumber(0, 2.2, 'DIVIDE'), 0);
    });
});