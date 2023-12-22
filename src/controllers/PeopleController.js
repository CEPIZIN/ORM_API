//importar controller 
const controller = require('./Controller.js')
const PeopleService = require('../services/PeopleService')

const peopleService = new PeopleService()
class PeopleController extends controller {
    constructor(){
        super(peopleService)
    }
    
}


module.exports = PeopleController;
