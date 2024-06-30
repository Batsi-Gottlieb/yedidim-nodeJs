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
            const helpRequests = await this.getAll();
            let result = helpRequests.find(help => help._id == id);
            if (!result) {
                result = helpRequests.find(help => help.personal_code == id);
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
 // אם המתנדב כבר קיים במערכת, תוצג לו תיבת טקסט בה יקליד את המזהה האישי שלו וילחץ על כפתור "אני מתנדב". פעולה זו תעדכן את מצב הבקשה ל "בטיפול" וקוד מתנדב יתמלא בהתאמה.
 async Ivolunteer(personal_code, id_help_requests) {
    try {
        await this.model.findByIdAndUpdate(id_help_requests, { idStatus: 82 });
        const volunteer = await this.volunteer.findOne({ personal_code: personal_code });
        if (!volunteer) {
            throw new Error(`Volunteer with personal code ${personal_code} not found.`);
        }
        await this.model.findByIdAndUpdate(id_help_requests, { idVolunteers: volunteer._id });
        return { message: 'Volunteer assigned successfully'+personal_code+'is with request num:'+id_help_requests };
    } catch (error) {
        throw new Error(`Error fetching help request: ${error.message}`);
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