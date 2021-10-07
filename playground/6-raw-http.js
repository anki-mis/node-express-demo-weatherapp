const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=acb9745f865f7949d2f00f27f17336e5&query=37.8267,-122.4233';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body.current);
    });
});

request.on('error', (error) => {
    console.log('Error occurred: ' +  error);
});

request.end();