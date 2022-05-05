// import request from 'supertest';
// import express from "express";
// import router from "../routes";
// import req from "express/lib/request";
const request = require('supertest');
const app = require('../app');
const router = require("express").Router()
const contactsController = require('../controllers/users');;

const express = require('express');

// import app from "../app.js"
// const app = new express();

// app.use('/', router);

describe("Verify Routes Work", function () {
    test('Responds to /', async () => {
        const res = await request(app).contactsController.getAll('/');
        expect(res.header['content-type']).toBe('application/json');
        expect(res.statusCode).toBe(200);
        // expect(res.test).toEqual("hello world!");
    });

    test("Responds to /users/:id", async () => {
        const res = await request(app).contactsController.getAll("users/1");
        expect(res.header['content-type']).toBe('application/json');
        expect(res.statusCode).toBe(200);
        // expect(res.test).toEqual('Hello 1!);

    });
});