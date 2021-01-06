const { handler } = require("../index");

describe('Vehiculos', () => {
    test("[POST] - Vehiculos", async (done) => {
        const registro = {
            "name": "ULTIMOO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.py4e.com/api/planets/1/",
            "films": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "species": [
                "https://swapi.py4e.com/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "https://swapi.py4e.com/api/people/2/"
        }

        const response = await handler({ body: JSON.stringify(registro) });
        expect(response.message).toBeTruthy();
        done();
    });
})
