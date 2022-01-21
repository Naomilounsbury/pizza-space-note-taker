//Ive instantiated the express router class and called it router
const router = require("express").Router;
const fs = require('fs');
const path = require('path');
// shouldn't the post request come first because I dont even have any GET data so why do I even need get data 


router.get('/api/notes', (req, res)=>{
    let results = notes
    res.json(results)
    //so I really don't know what this query is like how are people going to query freaken notes but we do have to have individual ids for them
    // if(req.query){
    //   results = 
    // (req.query, results)
    // }
})

  // router.post('/api/notes', (req, res) => {
  //   res.sendFile(path.join(notes))
  // })
  // router.delete('/api/notes/:id',(req, res)=>{
  //     res.
  // })