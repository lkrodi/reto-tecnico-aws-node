const fetch = require("node-fetch");
const es = require("./es.json");

exports.handler = async (event) => {
  let response = null;

  try {
    const response_starwars = await fetch(process.env.URL_API_CLIENT || "https://swapi.dev/api/people", { method: "GET" });
    const resultado = await response_starwars.json();
    const propiedadesModeloPrincipal = Object.keys(resultado.results[0]);

    resultado.results.map((elemento) => {
      propiedadesModeloPrincipal.map((property) => {
        es.map((e) => {
          if (e.principal === property) {
            elemento[e.es] = elemento[property];
            delete elemento[property];
          }
        });
      });
    });

    response = resultado.results;
  } catch (error) {
    response = error.message;
  }

  return response;
};