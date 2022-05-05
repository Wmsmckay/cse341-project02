// con request from 'supertest';
// import express from "express";
// import router from "../routes";
// import req from "express/lib/request";
const request = require('supertest');
const app = require('../app.js');
const router = require("express").Router()
// const router = require("../routes/index");
const usersController = require('../controllers/users');
const express = require('express');
// const { route } = require('../routes');

// import app from "../app.js"
// const app = new express();

// app.use('/', router);

describe("Verify Routes Work", function () {
    test('Responds to /users', async () => {
        // const res = await request(app).get(usersController.getAll('/'));
        // const res = await request(app).get('/users')
        // , usersController.getAll)
        // console.log(app(router))
        // router.get('/user', eventsController.getAll);

        const res = await router.use('/users', require('../routes/users')).get('/', usersController.test);
        // const res = await request(app)
            // .get('/users', usersController.test)
        // const res = await router.get('/', usersController.getAll);
        expect(res.test).toEqual("hello world!");
        // console.log(res)


        // expect(res.header['content-type']).toBe('application/json');
        // expect(res.statusCode).toBe(200);
        
    });
    // expect(res.test).toEqual("hello world!");

    // test("Responds to /users/:id", async () => {
    //     const res = await request(app).usersController.getAll("users/1");
    //     expect(res.header['content-type']).toBe('application/json');
    //     expect(res.statusCode).toBe(200);
    //     // expect(res.test).toEqual('Hello 1!);

    // });
});