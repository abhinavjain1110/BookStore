import express from'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";

import bookRoute from './route/book.rout.js';
import userRoute from "./route/user.rout.js";

const app = express()

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT=process.env.PORT||4000
const URI=process.env.MongoDBURI
//connect to mongodb

    mongoose.connect(URI)
    .then(e=> console.log('MongoDB Connected'))
    .catch (error=>
    console.log("Error",error))

// routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

