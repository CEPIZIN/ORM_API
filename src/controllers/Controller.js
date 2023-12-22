class Controller{
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity
    }
    //findall 
    async getAll(req,res){
        try{
            const getAllservices = await this.serviceEntity.GetAllRegister()
            return res.status(200).json(getAllservices)
        }catch(Err){
            console.log(Err)
        }
      
    }
}

module.exports = Controller