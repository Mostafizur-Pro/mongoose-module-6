import { IUser } from "./user.interface";
import User from "./user.model";

// async function run() {
    export const createUserToDB = async (payload: IUser): Promise<IUser> => {
        // creating a new user
        const user = new User(payload); //User -> class  user -> instance
        await user.save();  // built in intance methods 
                            // nije ja create korbo tai custom intance
           
        return user;
      };

    export const getUsersFromDB = async (): Promise<IUser[]> => {
        const users = await User.find();
        return users;
      };
export const getUserByIdFromDB =async (payload:string):Promise<IUser|null> => {
  const user = await User.findOne({id: payload},{name:1, contactNo:1 })
  return user
}