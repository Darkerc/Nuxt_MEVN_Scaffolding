import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Example_Schema = new Schema({
  name: { type: String },
});

export default mongoose.model('Example_Schema', Example_Schema);
