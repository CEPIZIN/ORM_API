
const dataSource = require('../database/models')

class Services{
    constructor(nameModel){
        this.Model = nameModel
        }

    async GetAllRegister(){
        return dataSource[this.Model].findAll()
        }
        
    async GetById(id){
        return dataSource[this.Model].findByPk(id)
    }


    async updateRegister(DataUPdate, id ){
        const updateRegister=  dataSource[this.Model].update(DataUPdate,{
            where:{id:id}
            })

        if(updateRegister[0] === 0){
            return false
            }
        return true 
    }
    async postRegister(Data){
        return dataSource[this.Model].create(Data) 

    }

    async deleteRegister(id){
        return dataSource[this.Model].destroy({ 
            where: { id: id } 
        });
    }
}

module.exports = Services


