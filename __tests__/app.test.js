const request = require('supertest');
const app = require('../app');
const usersController = require('../controllers/users');
const router = require('../routes');

describe("Testing the Test endpoint", function () {
    test('should give 200 status', async () => {
        const response = await request(app).get('/users', usersController.testCreateUser)
        expect(response.statusCode).toBe(200);
        // expect(res.header['content-type']).toBe('application/json');

    })
    test('Should give 200 status"', async () => {
        const response = await request(app).post('/users', usersController.testCreateUser)
        .send({
            username: "username",
            password: "password"
        });
        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        // expect(res.test).toEqual();
    });
})

describe("Swagger UI is working", function () {
    test('give 200 response', async () => {
        const response = await request(app).get('/api-docs/#');
        expect(response.statusCode).toBe(200);
    })
}) 