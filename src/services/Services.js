
const dataSource = require('../models')

class Services{
    constructor(nameModel){
        this.Model = nameModel
        }

    async GetAllRegister(){
        return dataSource[this.Model].findAll()
        }

    async updateRegister(DataUPdate, id ){
        const updateRegister= await dataSource[this.Model].update(DataUPdate,{
            where:{id:id}
            })

        if(updateRegister[0] === 0){
            return false
            }
        return true    
    }
}

module.exports = Services


