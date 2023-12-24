class Controller{
    constructor(serviceEntity){
        this.serviceEntity = serviceEntity
    }

    async create(req,res){
        try{
            const Data = req.body
            const create = await this.serviceEntity.postRegister(Data)
            return res.status(200).json(create)
        }catch(Err){
            console.log(Err)
        }
    }
   
    async getAll(req,res){
        try{
            const getAllservices = await this.serviceEntity.GetAllRegister()
            return res.status(200).json(getAllservices)
        }catch(Err){
            console.log(Err)
        }
      
    }

    async update( req,res){
        try{
            const {id} = req.params
            const DataUpdate = req.body 

            const isUpdate = this.serviceEntity.updateRegister(DataUpdate, Number(id))
            if (!isUpdate){
            return res.status(400).json({ mensagem: 'The record has not been updated.' });
            } 
            return res.status(200).json({mensagem: 'Updated successfully' }) 
        }catch(Err){
            console.log(Err)
        }
    }
}

module.exports = Controller