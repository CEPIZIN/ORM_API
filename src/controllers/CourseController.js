//importar controller 
const controller = require('./Controller.js')
const CourseService = require('../services/CourseService')

const courseService = new CourseService()
class CourseServiceController extends controller {
    constructor(){
        super(courseService)
    }
    
}


module.exports = CourseServiceController;
