const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  it('should return 2 when called with 1 and 1', () => {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
  });
  it('should return 3 when called with 2 and 1', () => {
    expect(calculateNumber('SUM', 2, 1)).to.equal(3);
  });
  it('should return 4 when called with 3 and 1', () => {
    expect(calculateNumber('SUM', 3, 1)).to.equal(4);
  });
  it('should return 1 when called with 2 and 1', () => {
    expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
  });
  it('should return 2 when called with 3 and 1', () => {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
  });
  it('should return 3 when called with 4 and 1', () => {
    expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
  });
  it('should return 2 when called with 4 and 2', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('should return 1 when called with 3 and 2', () => {
    expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
  });
  it('should return 1 when called with 2 and 2', () => {
    expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  });
  it('should return Error when called with 2 and 0', () => {
    expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
  });
  it('should return Error when called with 0 and 0', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
  it('should return Error when called with 0 and 2', () => {
    expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
  });
  it('should return Error when called with 0 and 2.2', () => {
    expect(calculateNumber(0, 'DIVIDE', 2.2)).to.equal('Error');
  });
});
