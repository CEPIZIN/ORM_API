const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const courseController = new CourseController(); 

const router = Router();

router
    .get('/course', (req, res) => courseController.getAll(req, res))
    .put('/course/:id', (req,res)=> courseController.update(req,res)) 
    .put('/course/:id', (req, res) => categoryServiceController.update(req, res))    
    .post('/course', (req,res)=> categoryServiceController.create(req,res))
    .delete('/course/:id',(req,res)=> categoryServiceController.deleteData(req,res))

module.exports = router;
