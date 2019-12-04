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

// mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
//    useNewUrlParser: true
   useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
    }).then(() => {
        console.log('Database sucessfully connected')
    },
    error => {
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
app.use(express.static(path.join(__dirname, './dist/frontend')));
app.use('/', express.static(path.join(__dirname, './dist/frontend ')));
app.use('/', apiRouter)

const port = process.env.PORT || 3000;
// app.get('/', (req, res) => {
//     // console.log('res', res);
//     res.json({"tutorial" : "Build REST API with node.js"});
// });

app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!');
})

// Find 404 and hand over to error handler
/* app.use((req, res, next) => {
    next(createError(404));
 }); */

 app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode){
            console.log('err', err);
            console.log('decode', decode);
        })
    }else {
        console.log('errrrrrrr', req);
        console.log('res', res);
    
    }
 });



/*  app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
  }); */
 



