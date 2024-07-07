import mongoose from 'mongoose';
const locationSchema = new mongoose.Schema({
    _id: Number,
    city: String,
    phone: String,
    districtCode: Number,
});

const Location = mongoose.model('locations', locationSchema);
export default Location;
