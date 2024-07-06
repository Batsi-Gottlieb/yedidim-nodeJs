import mongoose from 'mongoose';
const help_requestSchema = new mongoose.Schema({
    _id: Number,
    idPriority: Number,
    phone: String,
    firstName: String,
    lastName: String,
    area: String,
    idStatus: Number,
    numberOfPeopleStuck: Number,
    details: String,
    idVolunteering_for_volunteer: Number,
    idVolunteers: Number,
    idLocation:Number

});

//model
const Help_request = mongoose.model('help_requests', help_requestSchema);

export default Help_request;