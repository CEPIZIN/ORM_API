//importar controller 
const controller = require('./Controller.js')
const CategoryService = require('../services/catgoryService.js')

const categoryService= new CategoryService()
class CategoryServiceController extends controller {
    constructor(){
        super(CategoryService)
    }
    
}


module.exports = CategoryServiceController;
