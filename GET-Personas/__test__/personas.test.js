const { handler } = require("../index");

describe('Personas', () => {
    test("[GET] - Personas", async (done) => {
        const response = await handler();
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThanOrEqual(1);
        done();
    });
})
