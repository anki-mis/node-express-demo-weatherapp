const fs = require('fs');
const chalk = require('chalk');
let notes_contents = "Your notes...";

function getNotes() {
    return notes_contents;
}

const addNote = function (title, body) {
    
    const notes = loadNotes();
    console.log('notes=' + notes +' and typeof notes=' + typeof notes);

    duplicateTitle = notes.filter(function (note) {
        return note.title === title;
    });

    //console.log("duplicateTitle = " + JSON.stringify(duplicateTitle));
    //console.log("duplicateTitle.length = " + duplicateTitle.length);
    
    if (duplicateTitle.length === 0) {
        notes.push({title: title, body: body});  
        console.log(JSON.stringify(notes));  
        saveNotes(notes);
        console.log('title added successfully');
    }
    else {
        console.log('this title already exists');
    }
    
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('../notes.JSON',dataJSON);
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('../notes.JSON');
        //console.log(dataBuffer);
        const dataJSON = dataBuffer.toString();
        //console.log(dataJSON);
        const dataParsed = JSON.parse(dataJSON);
        console.log('From loadNotes - ' + dataParsed);
        return dataParsed;
    }
    catch(e) {
        return [];
    }
        
}

const removeNote = function (title) {

    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note){
        return note.title !== title;
    });
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed'));
    }
    else {
        console.log(chalk.red.inverse('Something went wrong, may be the note was not found'));
    }
    
}

//addNote("Fundamentals: Ten Keys to Reality","Frank Wilczek");
removeNote("Fundamentals: Ten Keys to Reality");

module.exports = getNotes;