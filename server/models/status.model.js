import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
    name: String
  });
  const Status = mongoose.model('statuses', statusSchema);
  export default Status;