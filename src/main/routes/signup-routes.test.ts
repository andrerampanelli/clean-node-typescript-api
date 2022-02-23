import request from 'supertest'
import app from '../config/app'

describe('Signup routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'any_name',
        email: 'any@mail.com',
        password: 'any_pass',
        passwordConfirmation: 'any_pass'
      })
      .expect(200)
  })
})
