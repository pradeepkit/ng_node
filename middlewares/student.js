'use strict';

const Student = require('../models/Student');

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

function student_reg (req, res) {
    let studentData = {
        name: req.body.name,
        roll_no: req.body.roll_no,
        password: 'password',
        registraion_no: req.body.registraion_no,
        class: req.body.class,
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        guardian_name: req.body.guardian_name,
        occupation: req.body.occupation,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        mobile_no: req.body.mobile_no,
        pin_code: req.body.pin_code,
        image: req.body.image,
        description: req.body.description,
        cteate_on: new Date(),
    }
    Student.create(studentData, (error, data, next) => {        
        if (error) {
            console.log('ERRR',error);
            res.json(error)
          // return next(error)
        } else {
          // /console.log('req', req);
          res.json(data)
        }
      })    
}

// find().sort(['updatedAt', 1]);


  // Get All Employees get '/'

  // Post.find({}).sort('field').exec(function(err, docs) { ... });

  function get_student_list (req, res, next){
    Student.find({}).sort('roll_no').exec((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
      }
    })
  }
  
  // Get single employee  get '/read/:id'
  function  get_student_list_byId (req, res, next) {
    Student.findById(req.params.id, (error, result) => {
      if (error) {
        // return next(error)
        let data =  {
          msg: 'Data not Found with this ' + req.params.id + 'Id',
          status: 400,
          error: error
        }
        res.status(400).send(data);
      } else {
        if(result){
          let resData = {
            status: 200,
            msg: 'successful',
            data: result,  
          }
          res.json(resData)
          
        }else{
          let resData = {
            status: 200,
            msg: 'Not fonud any value with this ' + req.params.id +' Id' ,
            data: [],  
          }
          res.json(resData)
        }       
        
      }
    }).lean();
  }
module.exports = {
    studentReg : student_reg,
    getStudent : get_student_list,
    getStudentById : get_student_list_byId
  };