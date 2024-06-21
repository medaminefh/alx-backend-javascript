const chaiPromise = import('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let expect;

    // Before running tests, ensure chai is imported
    before(async () => {
      const chai = await chaiPromise;
      expect = chai.expect;
    });
    it('should call Utils.calculateNumber with SUM type', () => {
        const calculateNumberSpy = sinon.spy(Utils);
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.equal(120);
        calculateNumberSpy.restore();
    });
    it('should call Utils.calculateNumber with SUM type', () => {
        const calculateNumberSpy = sinon.spy(Utils);
        sendPaymentRequestToApi(10, 10);
        expect(calculateNumberSpy.calledWith('SUM', 10, 10)).to.equal(20);
        calculateNumberSpy.restore();
    });
});