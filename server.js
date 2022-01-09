const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/crudb", (err)=> {
    if(!err) console.log('db connected');
    else console.log('db error');
})

const newSchema = new mongoose.Schema({ 
    name:String, 
    age:Number
});

const newModel = new mongoose.model("Collections", newSchema);

const data = new newModel({name:'alamene', age:38});
data.save();

app.listen(5000, () => {console.log('connection listening at 5000')})