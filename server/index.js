const express  = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const todoItemRoute = require('./routes/todoItems');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());

//connecting to database mongoDB

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))

//creating route 
app.use('/',todoItemRoute);

app.listen(PORT,()=> console.log('Server connected'));
