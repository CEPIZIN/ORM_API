// lógica de negocio 
const dataSource = require('../models')

class Services{
    constructor(nameModel){
        this.nameModel = nameModel
        }

    async GetAllRegister(){
        return dataSource[this.model].findAll()
        }
}

module.exports = Services