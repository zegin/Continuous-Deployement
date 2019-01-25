var request = require('supertest')
var app = require('../index')

describe('GET /', () => {
    it('respond with Hello world', done => {
        request(app).get('/').expect('Hello world', done)
    })
})