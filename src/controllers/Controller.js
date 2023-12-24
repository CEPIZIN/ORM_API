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
            return res.status (500).json({ erro: Err.message });
        }
    }
   
    async getAll(req,res){
        try{
            const getAllservices = await this.serviceEntity.GetAllRegister()
            return res.status(200).json(getAllservices)
        }catch(Err){
            console.log(Err)
            return res.status (500).json({ erro: Err.message });
        }
      
    }

    async GetDataByiD(req,res){
        const {id} = req.params
        try{
            const data = await this.serviceEntity.GetById(Number(id))
            return res.status(200).json(data)
        }catch(Err){
            return res.status (500).json({ erro: Err.message });
        }
    }

    async update( req,res){
        try{
            const {id} = req.params
            const DataUpdate = req.body 

            const isUpdate = await this.serviceEntity.updateRegister(DataUpdate, Number(id))
            if (!isUpdate){
            return res.status(400).json({ mensagem: 'The record has not been updated.' });
            } 
            return res.status(200).json({mensagem: 'Updated successfully' }) 
        }catch(Err){
            console.log(Err)
        }
    }

    async deleteData(req,res){
        const {id} = req.params
        try{
            const deletData = await this.serviceEntity.deleteRegister(id)
            res.status(200).json({mensagem: 'successfully shut down.'})
        }catch(Err){
            console.log(Err)
        }
    }
}

module.exports = Controller