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
}

module.exports = PeopleController;
