const {Router} = require('express');
const router = Router();

const {getNotes , createrNotes, deleteNotes, updateNotes , getNote} = require('../controllers/notes_controller');

    router.route('/')
    .get(getNotes)
    .post(createrNotes)

    router.route('/:id')
    .delete(deleteNotes)
    .put(updateNotes)
    .get(getNote)
    
module.exports = router;