const path = require('path');
//router is the thing that tells express to load the index.html file in the browser
const router = require('express').Router();
// doing gets to to display this 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//when someone goes to notes we are telling the router to display notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
// * star says that any other request goes to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;