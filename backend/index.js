import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import{ Book } from './models/bookModels.js';
import bookRoutes from '.routes/booksRoutes.js'
const app= express();
app.use(express.json());
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