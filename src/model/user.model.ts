import mongoose, { Types } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  profilePicture: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
}

export const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  followers: {
    type: [Types.ObjectId],
  },
  following: {
    type: [Types.ObjectId],
  },
});

export const User = mongoose.model<IUser>('user', userSchema);
