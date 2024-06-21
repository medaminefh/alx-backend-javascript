const request = require('request');
const expect = require('chai').expect;

describe('API', () => {
    it('should return a status code of 200', () => {
        request('http://localhost:7865', (error, response) => {
            expect(response.statusCode).to.equal(200);
        });
    });
})