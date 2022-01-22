const utils  = require('util')
const path = require('path');
const fs = require("fs")
const { v4: uuidv4 }  = require("uuid")
//in this file I need fs package and uuid and use readfile async writefile async
//then create class can be named 
//export class by name 
// the class will contain a couple of methods that will handle all of the functionanilty that needs to be done against the json file
// in the file will need function(not really a function but a method that belongs to a class) using the readfile and writefile and a method that 
function createNewNote(body, notes) {
    const note = body;
    //the note already has the property of title and text for the note and we need to add the id
    //just calling uuid4 to create the id, so easy
    notes.push({...note, id: uuidv4()});
    fs.writeFileSync(
      path.join(__dirname, './db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }

  function deleteNote(id, notes){
    //so basically we are doing the exact same thing as createnewnote but if the note doesnt equal the clicked note then it appears and the clicked note doesnt appear
    const results = notes.filter(notes => notes.id !== id);

    fs.writeFileSync(
      path.join(__dirname, './db.json'),
      //we are now setting the notes file in db.js to equal the results file
      JSON.stringify({ notes:results }, null, 2)
    );
    return notes;
  }
  module.exports = {createNewNote, deleteNote}