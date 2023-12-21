const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js'); 

const router = Router();

router
    .get('/people', PeopleController.GetAllPeople)
    .get('/people/:id', PeopleController.GetIdPeople)

module.exports = router;
