import { Schema, model, Model } from "mongoose"
import { IUser, IUserMethods } from "./user.interface"

type UserModel = Model<IUser, {}, IUserMethods>

// step2: creating an Schema
const userSchema = new Schema<IUser, UserModel, IUser>({
    id: {
        type: String, required: true,
        unique: true
    },
    role: {type: String, required: true},
    password: {type: String, required: true},
    name: {
        firstName: {type: String, required: true},
        middleName: {type: String},
        lastname: {type: String, required: true}
    },
    dateOfBirth: {type: String},
    gender: {type: String, enum: ['male', 'female']},
    email: {type: String},
    contactNo: {type: String, required: true},
    emergencyContactNo: {type: String, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true}

})

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

// step3: model
const User = model<IUser, UserModel>("User", userSchema)

export default User
