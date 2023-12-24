//importar controller 
const controller = require('./Controller.js')
const PeopleService = require('../services/PeopleService')

const peopleService = new PeopleService()
class PeopleController extends controller {
    constructor(){
        super(peopleService)
    }
    
    async GetRegister(req,res){
        const { student_id } = req.params;
        try{
            const listRegister = await peopleService.GetRegisterByStudent( Number(student_id))
            return res.status(200).json(listRegister)
        }catch(Err){
            return res.status (500).json({ erro: Err.message });
        }

    }
}


module.exports = PeopleController;
