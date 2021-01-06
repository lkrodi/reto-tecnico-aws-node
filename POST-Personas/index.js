const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    credentials: {
        secretAccessKey: process.env.secretAccessKey,
        accessKeyId: process.env.accessKeyId
    },
});

const ddb = new AWS.DynamoDB.DocumentClient();
const Tabla = "Starwars";

function generarCadenaAleatoria() {
    let longitud = 16;
    let caracteres = "0123456789abcdefghijklmnopqrstuvwxyz";

    let cadena = "";
    let max = caracteres.length-1;
    for (let i = 0; i < longitud; i++) {
        cadena += caracteres[Math.floor(Math.random() * (max+1))];
    }
    
    return cadena;
}

function insertarData(data) {
    return ddb.put({
        TableName: Tabla,
        Item: {
            id_registro: generarCadenaAleatoria(),
            ...data
        },
    }).promise();
}

exports.handler = async (event) => {
    let response = null;
    let data = JSON.parse(event.body);

    console.log("data", data);
    
    try {
        await insertarData(data);
        response = { message: "Registro insertado correctamente" };
    } catch (e) {
        response = { message: e.message  };
    }
    
    return response;
};