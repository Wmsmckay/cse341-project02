// const supertest = require('supertest');
// const app = require('../app');
// const mongoose = require("mongoose");
// const databaseName = "test";
// const usersController = require('../controllers/users');
// const { deleteOne } = require('../models/users');
// const router = require('../routes');
// const db = require('./config/database');
// // const {MongoClient} = require('mongodb');

const request = require('supertest');
const app = require('../app');
const db = require('./db');
const {
  create_user
} = require('../controllers/users');

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

// describe('POST /users', () => {
//   test('It should store a new user', done => {
//     // const response = await request(app).get('/users', usersController.create_user)

//     agent
//       .post('/user', usersController.create_user)
//       .send({
//         firstName: 'Tommy',
//         lastName: 'Boy',
//         email: 'test@test.com',
//         age: 21,
//         phone: 1234567890,
//         eventsAttended: ["Star wars Night"],
//         gender: 'male'
//       })

//       // expect(agent.status).toBe(201);
//       .expect(201)
//       .then(res => {
//         expect(res.body._id).toBeTruthy();
//         done();
//       });
//   });
// });

describe('services/post.js', () => {
  test('It should return a post with an id', done => {

    expect(async () => create_user({
        firstName: 'Tommy',
        lastName: 'Boy',
        email: 'test@test.com',
        age: 21,
        phone: 1234567890,
        eventsAttended: ["Star wars Night"],
        gender: 'male'
      }))
      .not.toThrow();
      // .expect()
    done();
  });
});


// const request = supertest(app);


// beforeAll(async () => {
//   // const url = `mongodb://127.0.0.1/${databaseName}`;
//   // await mongoose.connect(url, { useNewUrlParser: true });
//   const db = require('../test_db/mongoDb.js');
//   // const db = mongoose.connection
//   db.once('open', _ => {
//     console.log('Database connected:', url)
//   })

//   db.on('error', err => {
//     console.error('connection error:', err)
//   })
// })


// // This test fails because 1 !== 2
// // it("Testing to see if Jest works", () => {
// //   expect(1).toBe(1);
// // });

// if ("Async test", async done => {
//     //do the test here
//     const res = await request.post("/users").send({
//       "firstName": "Test"
//     });
//     expect(response.status).toBe(422);
//     done();
//   });

// // beforeAll(async () => await db.connect);
// // afterEach(async () => await db.clear);
// // afterAll(async () => await db.close);

// // // describe("tags", () => {
// // //   describe("POST /tags", () => {
// // //     test("successful", async () => {
// // //       const res = await agent.post("/tags").send({ name: "test-tag"});
// // //       expect(res.statusCode).toEqual(201);
// // //       expect(res.body).toBeTruthy();
// // //     });
// // //   });
// // // });

// // describe('Testing User Routes', () => {
// //   test('Create new user', async () => {
// //     const response = await request(app).post('/users', usersController.testCreateUser).send({
// //       firstName: 'Tommy',
// //       lastName: 'Boy',
// //       email: 'test@test.com',
// //       age: '21',
// //       phone: '1234567890',
// //       eventsAttended: [],
// //       gender: 'male'
// //     });

// //     expect(response.body.firstName).toEqual('Tommy');
// //     // done();
// //   });

// // // describe('insert', () => {
// // //   let connection;
// // //   let db;

// // //   beforeAll(async () => {
// // //     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
// // //       useNewUrlParser: true,
// // //       useUnifiedTopology: true,
// // //     });
// // //     db = await connection.db(globalThis.__MONGO_DB_NAME__);
// // //   });

// // //   afterAll(async () => {
// // //     await connection.close();
// // //   });

// // //   it('should insert a doc into collection', async () => {
// // //     const users = db.collection('users');

// // //     const mockUser = {_id: 'some-user-id', name: 'John'};
// // //     await users.insertOne(mockUser);

// // //     const insertedUser = await users.findOne({_id: 'some-user-id'});
// // //     expect(insertedUser).toEqual(mockUser);
// // //   });
// // // });



// // // beforeAll(async () => await db.connect());
// // // afterEach(async () => await db.clearDatabase());
// // // afterAll(async () => await db.closeDatabase());

// // // describe("Testing the Test endpoint", function () {
// // //     test('should give 200 status', async () => {
// // //         const response = await request(app).get('/users', usersController.testCreateUser)
// // //         expect(response.statusCode).toBe(200);
// // //         // expect(res.header['content-type']).toBe('application/json');
// // //     })

// // //     test('Should give 200 status"', async () => {
// // //         const response = await request(app).post('/users', usersController.testCreateUser)
// // //         .send({
// // //             username: "username",
// // //             password: "password"
// // //         });
// // //         expect(response.statusCode).toBe(200);
// // //         expect(response.header['content-type']).toBe('application/json; charset=utf-8');
// // //         // expect(res.test).toEqual();
// // //     });
// // // })

// // // describe("Swagger UI is working", function () {
// // //     test('give 200 response', async () => {
// // //         const response = await request(app).get('/api-docs/#');
// // //         expect(response.statusCode).toBe(200);
// // //     })
// // // })



// //   // test('Get list of users', async () => {

// //   // })

// //   // test('Get one user', async () => {

// //   // })

// //   // test('Update user', async () => {

// //   // })

// //   // test('Delete user', async () => {

// //   // })
// // });