//importar controller 
const controller = require('./Controller.js')
const RegisterService = require('../services/RegisterService ')

const RegisterService = new RegisterService()
class RegisterServiceController extends controller {
    constructor(){
        super(RegisterService)
    }
    
}


module.exports = RegisterServiceController;
