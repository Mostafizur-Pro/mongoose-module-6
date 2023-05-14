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




createUserToDB()
    // res.send('Hello World!')
    // next()
  })

  export default app



  /*
interface     =>    interface.ts
Schema, model =>    model.ts

route
route function => controller.ts
Database query function => service
  */