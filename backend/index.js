import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import{ book } from './models/bookModels.js';

const app= express();
app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send('Heluuu');
})

//Route for Saving a new book
app.post('/books', async(request, response)=> {
    try{
        if(
            !request.body.title ||
            !request.boby.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.boby.author,
            publishYear: request.body.publishYear,
        };
        const book= await Book.create(newBook);
        return response.status(201).send(book);

    } catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});



mongoose.connect(mongoDBURL)
.then(()=>{
console.log('App connected');
app.listen(PORT, () =>{
    console.log(`runnig:${PORT}`);
    });
})
.catch((error)=>{
console.log(error);
});