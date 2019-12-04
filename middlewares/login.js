'use strict';

const Student = require('../models/Student');
const jwt = require('jsonwebtoken')

const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 300



function login(req, res){
    let loginData = {
        email : req.body.email,
    }
    Student.find(loginData, (error, data) => {
        if(error){
            let value = {
                msg : 'Somthing wrong',
                status: 500,
                error: error
            }
            res.status(500).send(value);
        }else{
            console.log('data', data);
            if(data && data.length > 0){
                if(data[0].email === req.body.email){
                    if(data[0].password != req.body.password){
                        let resData = {
                            msg: 'Credentials is incorrect',
                            status: 400,
                            data: [] , 
                            login_status: 0     
                        }
                        res.json(resData)
                     } 
                     else{
                        let resData = {
                            msg: 'SuccessFully Login',
                            status: 200,
                            data: data, 
                            token: jwt.sign({ email: data.email, fullName: data.name, _id: data._id}, 'RESTFULAPIs'),    
                            login_status: 1
                        }
                        // Create a new token with the username in the payload
                            // and which expires 300 seconds after issue
                            const token = jwt.sign(resData.data.email , jwtKey, {
                                algorithm: 'HS256',
                                expiresIn: jwtExpirySeconds
                            })
                            console.log('token:', token)
                            // set the cookie as the token string, with a similar max age as the token
                            // here, the max age is in milliseconds, so we multiply by 1000
                            res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 });                            
                            res.json(resData);
                            res.end();
                        }
                }else {
                    let resData = {
                        msg: 'Credentials is incorrect',
                        status: 400,
                        data: [],        
                        login_status: 0  
                    }
                    res.json(resData)
                }    
            }  else{
                let resData = {
                    msg: 'Credentials is incorrect',
                    status: 400,
                    data: [],
                    login_status: 0          
                }
                res.json(resData)
            } 
            
        }
    } )
}

module.exports = {
    login: login
} 