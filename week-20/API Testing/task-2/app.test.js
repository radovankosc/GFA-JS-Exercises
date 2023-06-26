'use strict';

const request = require('supertest');
const app = require('./app');

describe('GET /groot', () => {
    it('should return status code 200 with received: hi', async() => {
        const response = await request(app).get('/groot?message=hi');
        expect(response.statusCode).toBe(200);
        expect(response.body.received).toBe('hi');
    })

    it('should return status code 400 wit error message', async() => {
        const response = await request(app).get('/groot');
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('I am Groot!');
    })
})
