const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const courseController = new CourseController(); 

const router = Router();

router
    .get('/course', (req, res) => courseController.getAll(req, res))
    .put('/course/:id', (req,res)=> courseController.update(req,res)) 

module.exports = router;
