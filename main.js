const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const userRouter = require('./server/routes/user');
const groupRouter = require("./server/routes/group");


const port = process.env.Port || 3000;
const app = express();



//Midellware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use ('/api/user', userRouter);
app.use('/api/group', groupRouter);




app.listen (port, (err) => {
    if (err) return console.warn ('err');
else console.log ('server running');
});


mongoose.connect('mongodb://localhost:27017/usermanagment1', { useNewUrlParser: true } , err =>{
    if (err) return console.log ('err');
    console.log ('Database connected')
});
