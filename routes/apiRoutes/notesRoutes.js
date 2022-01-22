//Ive instantiated the express router class and called it router
const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { Script } = require("vm");
const {createNewNote, deleteNote, readTheFile} = require("../../db/script")


router.get('/notes', (req, res)=>{
  const {notes} = readTheFile()
    let results = notes
    res.json(results)
  
})

  router.post('/notes', (req, res) => {
    const {notes} = readTheFile()
    //request.body is the data that theyve typed in
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  })
  //it grabs the id of the data and because that id exists i tmaps to the params id 
  router.delete('/notes/:id',(req, res)=>{
      const {notes} = readTheFile()
      const deleteThisNote = deleteNote(req.params.id, notes);
      res.json(deleteThisNote);

  })
  module.exports = router