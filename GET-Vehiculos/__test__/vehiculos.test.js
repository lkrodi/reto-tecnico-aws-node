const { handler } = require("../index");

describe('Vehiculos', () => {
    test("[GET] - Vehiculos", async (done) => {
        const response = await handler();
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThanOrEqual(1);
        done();
    });
})
