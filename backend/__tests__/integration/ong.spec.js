const request = require('supertest');
const app = require('./../../src/server');
const conn = require('./../../src/database/connection');
describe('ONG', async () => {
    before(async () => {
        Promisse.all([conn.migrate.rollback(), conn.migrate.latest()]);
    });

    afterAll(async () => {
        await conn.destroy();
    });
    it('should be able to create an ONG', async () => {
        const res = await request(app)
            .post('/ong')
            .send({
                name: "APAD",
                email: "apad@gmail.com",
                whatsapp: "81998272772",
                city: "Recife",
                uf: "Pernambuco"
            });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    })
})