const request = require('supertest');
const app = require('../app');
const usersController = require('../controllers/users');
const router = require('../routes');

describe("Testing the Test endpoint", function () {
    test('should give 200 status"', async () => {
        const response = await request(app).get('/users', usersController.testCreateUser)
        expect(response.statusCode).toBe(200);
    })
    test('Should give 200 status"', async () => {
        const response = await request(app).post('/users', usersController.testCreateUser)
        .send({
            username: "username",
            password: "password"
        });
        expect(response.statusCode).toBe(200);
    })
})