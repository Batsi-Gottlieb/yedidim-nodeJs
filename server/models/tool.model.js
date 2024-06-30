import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema({
    _id:Number,
    name: String
  });
  const Tool = mongoose.model('tools', toolSchema);
  export default Tool;