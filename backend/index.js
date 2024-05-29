import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import{ Book } from './models/bookModels.js';
import bookRoutes from './routes/booksRoutes.js';
import cors from 'cors';

const app= express();
app.use(express.json());
//middleware for handling CORS policy
//option 1: allow all origins with defaultvof cors(*)
//app.use(cors());
//option 2: allow custom origins


app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send('Heluuu');
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
console.log('App connected');
app.listen(PORT, () =>{
    console.log(`running:${PORT}`);
    });
})
.catch((error)=>{
console.log(error);
});