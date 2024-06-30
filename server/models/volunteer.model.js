import mongoose from 'mongoose';

//schema
const volunteerSchema = new mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    fhon: String,
    idTools_for_volunteering: Number,
    personal_code: {
        type: Number,
        default: () => Math.floor(Math.random() * 900000) + 100000 // יצירת מספר רנדומלי בין 100000 ל-999999
    }
});


//model
const Volunteer = mongoose.model('volunteers', volunteerSchema);

let num = 10;

export { num };//import {num} from './student.model';
export default Volunteer;//import Student from './student.model';