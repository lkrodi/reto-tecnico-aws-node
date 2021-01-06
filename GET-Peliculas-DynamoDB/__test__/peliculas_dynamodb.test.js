const { handler } = require("../index");

describe('Peliculas DynamoDB', () => {
    test("[GET] - Peliculas", async (done) => {
        const response = await handler();
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThanOrEqual(1);
        done();
    });
})
