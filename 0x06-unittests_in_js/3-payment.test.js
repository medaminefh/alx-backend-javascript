import sinon from 'sinon';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';
import { expect } from 'chai';

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM type', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
})