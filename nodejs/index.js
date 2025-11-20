// const express = require('express');
import express from 'express';
import cors from 'cors';

import 'dotenv/config';
// const database = require('mysql2');

import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import adminRoute from './routes/adminRoute.js';
import cartRoute from './routes/cartRoute.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/user' ,userRoute);


app.use('/api/products', productRoute);

app.use('/api/admin' , adminRoute);

app.use('/api/cart' , cartRoute);









app.listen(process.env.PORT || 5000, console.log('Server is Running !!'));