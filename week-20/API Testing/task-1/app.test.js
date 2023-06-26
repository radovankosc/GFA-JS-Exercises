const request = require('supertest');
const app = require('./app');

describe('GET /user', () => {
  test('should return a valid user', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        expect(err).toBeNull();

        expect(res.body.name).toBe('tobi');

        done();
      });
  })
})

//using async/await

// describe('GET /user', () => {
//   test('should return a valid user', async () => {
//     let res = await request(app)
//       .get('/user')
//       .expect(200);

//     expect(res.body.name).toBe('tobi');
//   })
// })