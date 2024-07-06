import mongoose from 'mongoose';
const discritSchema = new mongoose.Schema({
    _id: Number,
    name: String

});

//model
const Discrit = mongoose.model('discrits', discritSchema);

export default Discrit;