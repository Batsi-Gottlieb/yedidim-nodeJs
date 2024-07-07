import mongoose from 'mongoose';

const prioritySchema = new mongoose.Schema({
    name: String
  });
  const Priority = mongoose.model('priorityes', prioritySchema);
  export default Priority;