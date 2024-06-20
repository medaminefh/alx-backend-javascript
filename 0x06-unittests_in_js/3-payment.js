import Utils from './utils.js';

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}

export default sendPaymentRequestToApi;