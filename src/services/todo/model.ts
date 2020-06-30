import * as  mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

export { TodoModel }

