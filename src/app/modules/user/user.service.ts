import User from "./user.model";

// async function run() {
export const createUserToDB =async () => {
   
         const user = await new User(
            {
                id: '678',
                role: 'student',
                password: 'Jhakanaka',
                name: {
                    firstName: "Mostaafizur",
                    middleName: 'Rahman',
                    lastname: 'Sohan',
                },    
                 
                gender: "male" ,
                email: 'abc@ph.com',
                contactNo: '01731113169',
                emergencyContactNo: '01950165017',
                presentAddress: 'Uganda',
                permanentAddress: 'USA',
            })
            await user.save();
            // console.log(user);
            return user
            
        }