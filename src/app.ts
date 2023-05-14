import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { model, Schema } from 'mongoose'

const app:Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    /*
    Inserting a test data into mongodb
    Step1: Interface
    Step2: Schema
    Step3: Model
    Step4: Database Quesry
    */

// step1: creating an interface
interface IUser{
    id: string
    role: 'student'
    password: string
    name: {
        firstName: string
        middleName?: string
        lastname: string
    }
    dateOfBirth?: string
    gender: "male" | 'female'
    email?: string
    contactNo: string
    emergencyContactNo: string
    presentAddress: string
    permanentAddress: string
}

// step2: creating an Schema
const userSchema = new Schema<IUser>({
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

// step3: model
const User = model<IUser>("User", userSchema)

// async function run() {
 const createUserToDB =async () => {
    
 
const user = new User(
    {
        id: '444',
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
    console.log(user);
    
}

createUserToDB()
    // res.send('Hello World!')
    // next()
  })

  export default app