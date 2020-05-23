const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('mongoose');

const app = express();

let uri = 'mongodb+srv://philUser:UWLs7i4bK3PdxONM@cluster0-frpts.mongodb.net/test?retryWrites=true&w=majority';

//port 
const port = 3000;  

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware
app.use(cors());


const users = require('./routes/users');
app.use('/users', users);

app.get('/', (req, res)=> {
  res.send("invalid endpoint");
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// starting server
app.listen(port, ()=>{
  console.log("server started on port: "+ port);
})