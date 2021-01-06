const { handler } = require("../index");

describe('Naves Estelares', () => {
    test("[GET] - NavesEstelares", async (done) => {
        const response = await handler();
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThanOrEqual(1);
        done();
    });
})
