const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM type', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.equal(120);
        calculateNumberSpy.restore();
    });
    it('should call Utils.calculateNumber with SUBTRACT type', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(10, 10);
        expect(calculateNumberSpy.calledWith('SUM', 10, 10)).to.equal(20);
        calculateNumberSpy.restore();
    });
});