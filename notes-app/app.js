const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const imported_utils_obj = require("./utils.js");
const notes_obj = require("./notes.js");

/*
fs.writeFileSync("notes.txt","Writing from node app.js through node to this file.");
fs.appendFileSync("notes.txt","\nAppending from text through appendFileSync function.");

console.log(imported_utils_obj);
console.log(notes_obj());

console.log(validator.isEmail('an@gmail.com'));

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);

console.log("--------------------");
console.log("process.argv");
console.log(process.argv);
*/
// add, remove, read, list
//console.log("--------------------");
//console.log("yargs.argv");
//console.log(yargs.argv);


//Declare add command
console.log("Declaring add command...");
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(in_arg) {
        if (in_arg.title){
        console.log('Invoking add command and adding a new note with title - ', in_arg.title);
        }
        if (in_arg.body){
            console.log('Invoking add command and adding a new note with body - ', in_arg.body);
        }   
    }
});

//Declare remove command
console.log("Declaring remove command...");
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function() {
        console.log('Removing note!');
    }
});

//console.log("--------------------");
//console.log("yargs.argv");
//console.log(yargs.argv);
yargs.parse();

console.log('Printing something to see if lines get executed after yargs.parse is invoked');