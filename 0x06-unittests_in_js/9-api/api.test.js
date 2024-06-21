const request = require('request');
const expect = require('chai').expect;

describe('API', () => {
    it('should return a status code of 200', () => {
        request('http://localhost:7865', (error, response) => {
            expect(response.statusCode).to.equal(200);
        });
    });

    it('test for cart page id number', () => {
        request('http://localhost:7865/cart/1', (error, response) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('Payment methods for cart 1');
        });
    })

    it('test for cart page id string', () => {
        request('http://localhost:7865/cart/abc', (error, response) => {
            expect(response.statusCode).to.equal(404);
            expect(response.body).to.equal('Error: ID must be a number');
        });
    })


})