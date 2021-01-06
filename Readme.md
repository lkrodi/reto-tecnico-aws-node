# Reto Starwars API
[![N|Solid](https://miro.medium.com/max/2560/1*vJ3KzJe5qy6ruKHWgM4Vlg.png)](https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/naves_estelares)

La Arquitectura base consta de 5 endpoints utilizando la API Gateway y 5 Funciones Lambda,
estas se comunican con La API de Swapi y la Bases de datos DynamoDB para obtener e insertar información.
Además convierte los nombres modelos del inglés al español utilizando un json base para su equivalencia/traducción

| Endpoint | Método Http |Función Lambda |
| ------ | ------ | ------ |
| https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/test/peliculas | GET | PeliculasStarWarsGET(f) |
| https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/test/personas | GET | PersonasStarWarsGET(f) |
| https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/test/naves_estelares | GET | NavesEstelaresStarWarsGET(f)|
| https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/test/vehiculos | GET | VehiculosStarWarsGET(f) |
| https://qtn5hvb3ra.execute-api.us-east-1.amazonaws.com/personas | POST | StarWarsPeoplePOST(f) |

### Instalación
Ejemplo:
```sh
$ cd GET-NavesEstelares
$ npm install
$ ...
```

### Pruebas
Instalar Jest para realizar pruebas o utilizar npx
Ejemplo:
```sh
$ cd GET-NavesEstelares
$ npx jest run test
```
### Nota
Para probar los endpoints que requieran acceso a dynamodb u otros servicios aws, crear una variable .env a los directorios y colocar lo siguiente:

**secretAccessKey**=tu_clave_de_acceso_secreto_aws
**accessKeyId**=tu_clave_id_acceso_aws

---
**Rodolfo Escalante Cumpa**