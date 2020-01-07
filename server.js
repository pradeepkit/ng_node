'use strict';
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


// Connecting with mongo db
mongoose.Promise = global.Promise;
 mongoose.connect(dbConfig.db , { useNewUrlParser: true , useFindAndModify: false}).then(()=>{
    console.log('Database sucessfully connected');
},error => {
    console.log('Database could not connected: ' + error)
});  

// Setting up port with express js
// const employeeRoute = require('./routes/employee.route')      
const apiRouter = require('./routes/routes')      
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());
app.use(cors()); 
app.use(express.static(path.join(__dirname, './dist')));
app.use('/', express.static(path.join(__dirname, './dist')));
app.use('/', apiRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!');
})

 app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode){
        })
    }else {
    }
 });




