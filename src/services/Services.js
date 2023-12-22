
const dataSource = require('../models')

class Services{
    constructor(nameModel){
        this.Model = nameModel
        }

    async GetAllRegister(){
        return dataSource[this.Model].findAll()
        }
}

module.exports = Services


