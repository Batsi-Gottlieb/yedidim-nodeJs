import connect from './db.js';
import Volunteer from "../models/volunteer.model.js";
class Repository {
    constructor(model) {
        this.model = model;
        this.volunteer = Volunteer;
        connect();
    }
   
    //אם המתנדב כבר קיים במערכת, תוצג לו תיבת טקסט בה יקליד את המזהה האישי שלו 
    async getById(id) {
        try {
            const modelName = this.model.modelName;
            const modelAll = await this.getAll();

            let result = modelAll.find(help => help._id == id);

            if (!result && modelName==='volunteers') {
                result = modelAll.find(vol => vol.personal_code == id);
                if (!result) {
                    throw new Error('Volunteer not found');
                }
            }  
            return result;
        } catch (error) {
            throw new Error(`Error fetching help request: ${error.message}`);
        }
    }
    //update-put!!!!!!!!
    //help_requests

    async getAll(queryParameters) {
        let result;
        if (queryParameters) {
           result = await this.model.find(queryParameters);
        } else {
            result = await this.model.find({});
            console.log(result);
        }
        console.log(result);
        return result;
    }
    async create(data) {
        try {
            const modelName = this.model.modelName;
            console.log(`Creating ${modelName}`);
            if (modelName === 'volunteers') {
                let newVolunteer = await this.model.create(data);
                console.log(newVolunteer.personal_code);
                return newVolunteer.personal_code;
            } else {
                const newModel = await this.model.create(data);
                return newModel;
            }
        } catch (error) {
            console.error('Error creating model:', error);
            throw error;
        }
    }


    async delete(id) {
        try {
            const deletedObject = await this.model.findByIdAndDelete(id);
            if (!deletedObject) {
                res.status(404).json({ error: 'in repo not found' });
            }
            else return deletedObject;
        } catch (err) {
            throw (err + id);
        }
    }


    // async getById(id) {
    //     const userQuery = getByValueQuery('users', 'id');
    //     let result = await executeQuery(userQuery, [id]);
    //     if (result.length == 0) throw new Error("No elements found");
    //    // return result;
    //     return await this.model.findById(id);
    // }



    //     async update(id, data) {
    //         return await this.model.findByIdAndUpdate(id, data);
    //     }


}

export default Repository;