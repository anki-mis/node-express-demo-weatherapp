const fs = require('fs');

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};
const bookString = JSON.stringify(book);
fs.writeFileSync('../bookDetails.JSON',bookString);
*/

/*
const dataBuffer = fs.readFileSync('../bookDetails.JSON');
//console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
console.log(JSON.parse(dataJSON).author);
*/

const dataBuffer = fs.readFileSync('../bookDetails.JSON');
//console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
const dataObj = JSON.parse(dataJSON);
console.log(dataObj.name + '-' + dataObj.age + '. And displayed as a string: ' + dataJSON);

dataObj.name = "Thor";
dataObj.planet = "Asgard";
dataObj.age = "3000";

console.log(dataObj.name + ' - ' + dataObj.planet + ' - ' + dataObj.age + '. And displayed as a string: ' + dataJSON);

const dataString = JSON.stringify(dataObj);
console.log('After stringifying the newly created data - ' + dataString);
fs.writeFileSync('../bookDetails.JSON',dataString);
