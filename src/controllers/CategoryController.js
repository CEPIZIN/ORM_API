//importar controller 
const controller = require('./Controller.js')
const CategoryService = require('../services/catgoryService')

const categoryService= new CategoryService()
class CategoryServiceController extends controller {
    constructor(){
        super(categoryService)
    }
    
}


module.exports = CategoryServiceController;
