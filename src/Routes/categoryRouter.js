const { Router } = require('express');
const CategoryServiceController = require('../controllers/CategoryController.js');


 const categoryServiceController = new CategoryServiceController();

const router = Router();

router
    .get('/category', (req, res) => CategoryServiceController.getAll(req, res))
    .put('/category/:id', (req, res) => CategoryServiceController.update(req, res));

module.exports = router;
