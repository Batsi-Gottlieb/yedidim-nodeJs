import mongoose from 'mongoose';
const idVolunteering_for_volunteerSchema = new mongoose.Schema({
    _id:{ type: Number, select: false },
    id: Number,
    idVolunteers: Number,
    idVoluteering: Number
    
});
//model
const IdVolunteering_for_volunteer = mongoose.model('idVolunteering_for_volunteer', idVolunteering_for_volunteerSchema);

export default  IdVolunteering_for_volunteer;