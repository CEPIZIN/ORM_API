const Services = require('./Services.js')

class PeopleService extends Services{
    constructor(){ 
        super('People')
    }

    async GetRegisterByStudent(id){
        const student = await super.GetById()
        const listRegister = await student.GetRegisterByStudent()
        return listRegister
    }



}


module.exports = PeopleService