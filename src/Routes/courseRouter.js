const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const courseController = new CourseController(); 

const router = Router();

router
    .get('/course', (req, res) => CourseController.getAll(req, res))
    .put('/course/:id', (req,res)=> CourseController.update(req,res)) 

module.exports = router;
