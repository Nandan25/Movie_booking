import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import "dotenv/config";
import userRoute from './routes/userRoute';
import movieRoute from './routes/movieRoutes';
import bookingRoute from './routes/bookingRoute';
import { connect } from "./db.js";


const app = express();

connect();

const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRoute);
app.use('/movie', movieRoute);
app.use('/booking', bookingRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});