const { where } = require('sequelize');
const database = require('../models');

class PeopleController {
    static async GetAllPeople(req, res) {
        try {
            const listPeople = await database.People.findAll();
            return res.status(200).json(listPeople); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async GetIdPeople(req,res){
        try{
            const id = req.params.id;
            const getById = await database.People.findOne({ where: { id } })
            return res.status(200).json(getById)
        }catch(Err){
            console.log(Err)
            return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }


module.exports = PeopleController;
