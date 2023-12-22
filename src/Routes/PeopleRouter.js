const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const peopleController = new PeopleController(); 

const router = Router();

router.get('/people', (req, res) => peopleController.getAll(req, res)); 

module.exports = router;
