//Ive instantiated the express router class and called it router
const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { Script } = require("vm");
// shouldn't the post request come first because I dont even have any GET data so why do I even need get data 
const {notes} = require('../../db/db.json');
const {createNewNote, deleteNote} = require("../../db/script")


router.get('/notes', (req, res)=>{
    let results = notes
    res.json(results)
    //res.json({"hi":"aghhhhhh"});
    //so I really don't know what this query is like how are people going to query freaken notes but we do have to have individual ids for them
    // if(req.query){
    //   results = 
    // (req.query, results)
    // }
})

  router.post('/notes', (req, res) => {
    //request.body is the data that theyve typed in
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  })
  //it grabs the id of the data and because that id exists i tmaps to the params id 
  router.delete('/notes/:id',(req, res)=>{
      const deleteThisNote = deleteNote(req.params.id, notes)
      res.json(deleteThisNote)

  })
  module.exports = router