const Services = require('./Services.js')

class PeopleService extends Services{
    constructor(){
        //esta pegando da classe pai 
        super('People')
    }
}