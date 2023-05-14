import { IUser } from "./user.interface";
import User from "./user.model";

// async function run() {
    export const createUserToDB = async (payload: IUser): Promise<IUser> => {
        // creating a new user
        const user = new User(payload); //User -> class  user -> instance
        await user.save();
        // console.log(user.fullName());
      
        return user;
      };

    export const getUsersFromDB = async (): Promise<IUser[]> => {
        const users = await User.find();
        return users;
      };

         //  const user = await new User(
            // {
            //     id: '678',
            //     role: 'student',
            //     password: 'Jhakanaka',
            //     name: {
            //         firstName: "Mostaafizur",
            //         middleName: 'Rahman',
            //         lastname: 'Sohan',
            //     },    
                 
            //     gender: "male" ,
            //     email: 'abc@ph.com',
            //     contactNo: '01731113169',
            //     emergencyContactNo: '01950165017',
            //     presentAddress: 'Uganda',
            //     permanentAddress: 'USA',
            // })