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

exports.handler = async (event) => {
    let response = null;

    try {
        const resultado = await ddb.scan({
            TableName: Tabla
        }).promise();

        response = resultado.Items;
    } catch (e) {
        response = e.message;
    }

    return response;
};
