var request = require('supertest');
var app = require('../index.js')

describe('GET /', function() {
  it('displays "Hello Node!"', function(done) {
    // Make sure that we  are getting "Hello Node!"
    request(app)
      .get('/')
      .expect(function(res) {
        if (res.text.indexOf('Hello Node!!') == -1) throw new Error ("Missing Hello Node!");
     }).expect(200, done);
  });
});