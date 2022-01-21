//importing the notes routes and setting up the router to use those routes
const router = require('express').Router();
const notesRoutes = require('.notesRoutes');

router.use(notesRoutes);

module.exports = router;