const request = require('supertest');
const app = require('../../src/app');
const connetion = require('../../src/database/connection');

describe('ONG',() =>{
  beforeEach(async () => {
    await connetion.migrate.rollback();
    await connetion.migrate.latest();
  });

  afterAll(async () => {
   await connetion.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .set('Authorization','83a1cd18')
    .send({
      name: "LUNAR2",
      email: "lunar@lunar.com.br",
      whatsapp: "65999999999",
      city: "Cuiabá",
      uf: "MT"
    });

    expect(response.body).toHaveProperty('id');

    expect(response.body.id).toHaveLength(8);
  })
})