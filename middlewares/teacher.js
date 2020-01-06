'use strict';

const Teacher = require('../models/Teacher');

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};


const teacher_reg = (req, res) => {
    let teacherData = {
        name: req.body.name,
        password: 'password',      
        qualification: req.body.qualification,
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        data_of_birth: req.body.data_of_birth,
        created_by: req.body.created_by,
        subjects: req.body.subjects,
        email: req.body.email,
        address: {
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pin_code: req.body.pin_code
        },
        mobile_no: req.body.mobile_no,
        image: req.body.image,
        description: req.body.description,
        cteate_on: new Date(),
    }
    // let responce = JSON.stringify (req);
    // res.send(teacherData);
    
    Teacher.create(teacherData, (error, data, next) => {        
        if (error) {
            console.log('ERRR',error);
            res.json(error.errmsg)
        } else {
            delete data.password;
            delete data.__v;
          res.json(data)
        }
      })    
}

 const get_teacher_list =  (req, res, next) =>{ 
    // console.log('hello', req);
    Teacher.find({}).sort('name').exec((error, data) => {
      if (error) {
        return next(error);
      } else if(data){
           data.filter(obj =>{
            console.log('obj', delete obj._id);
            obj.id = obj._id;
            delete obj._id;
            delete obj.__v;
            delete obj.password;
            })
            res.json(data);
    }
    })
  }

module.exports = {
    teacherReg : teacher_reg,
    getTeacherList : get_teacher_list,

  };