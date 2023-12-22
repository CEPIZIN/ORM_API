class Controller{
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity
    }
    //findall 
    async getAll(req,res){
        try{
            const getAllservices = await this.serviceEntity.GetAllRegiste()
            return res.status(200).json(getAllservices)
        }catch(Err){
            //erro 
        }
      
    }
}

module.exports = Controller