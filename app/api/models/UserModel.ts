// models/User.js
import mongoose from 'mongoose';

export interface IUser {
  name: string,
  email: string,
  password: string,
  role: string
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  // employer | job-seeker | admin
  role: {
    type: String,
    required: true,
  }
});

// UserSchema.pre('save', () => {
//   console.log('Im running before saving');

// })

export default mongoose.models.User || mongoose.model('User', UserSchema);
