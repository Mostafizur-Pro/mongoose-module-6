import app from './app'
import mongoose from 'mongoose'; // const mongoose = require('mongoose');

const port = 5000

// database conection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection successful`);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
          })
    }catch(err){
        console.log(`Failed to connection`, err);
    }   
  }

  bootstrap() 


