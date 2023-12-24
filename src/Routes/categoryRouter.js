const { Router } = require('express');
const CategoryServiceController = require('../controllers/CategoryController.js');


 const categoryServiceController = new CategoryServiceController();

const router = Router();

router
    .get('/category', (req, res) => categoryServiceController.getAll(req, res))
    .get('/category/:id',(req, res)=> categoryServiceController.GetDataByiD(req,res))
    .put('/category/:id', (req, res) => categoryServiceController.update(req, res))    
    .post('/category', (req,res)=> categoryServiceController.create(req,res))
    .delete('/people/:id',(req,res)=> categoryServiceController.deleteData(req,res))
module.exports = router;
