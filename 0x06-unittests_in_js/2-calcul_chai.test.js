import {calculateNumber} from './2-calcul_chai.js';
import {expect} from "chai"

describe('calculateNumber', () => {
    it('should return 2 when called with 1 and 1', () => {
        expect(calculateNumber(1, 1, 'SUM')).to.equal(2);
    });
    it('should return 3 when called with 2 and 1', () => {
        expect(calculateNumber(2, 1, 'SUM')).to.equal(3);
    });
    it('should return 4 when called with 3 and 1', () => {
        expect(calculateNumber(3, 1, 'SUM')).to.equal(4);
    });
    it('should return 1 when called with 2 and 1', () => {
        expect(calculateNumber(2, 1, 'SUBTRACT')).to.equal(1);
    });
    it('should return 2 when called with 3 and 1', () => {
        expect(calculateNumber(3, 1, 'SUBTRACT')).to.equal(2);
    });
    it('should return 3 when called with 4 and 1', () => {
        expect(calculateNumber(4, 1, 'SUBTRACT')).to.equal(3);
    });
    it('should return 2 when called with 4 and 2', () => {
        expect(calculateNumber(4, 2, 'DIVIDE')).to.equal(2);
    });
    it('should return 1 when called with 3 and 2', () => {
        expect(calculateNumber(3, 2, 'DIVIDE')).to.equal(1.5);
    });
    it('should return 1 when called with 2 and 2', () => {
        expect(calculateNumber(2, 2, 'DIVIDE')).to.equal(1);
    });
    it('should return Error when called with 2 and 0', () => {
        expect(calculateNumber(2, 0, 'DIVIDE')).to.equal('Error');
    });
});