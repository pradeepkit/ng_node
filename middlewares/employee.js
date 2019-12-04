'use strict';

// Employee Model

let Employee = require('../models/Employee') ;

// Add Employee  post '/create'


 function create(req, res, next) {
    console.log('req', req);
    Employee.create(req.body, (error, data) => {
        
      if (error) {
          console.log('req', req, next, res);
        return next(error)
      } else {
        console.log('req', req);
        res.json(data)
      }
    })
  };
  
  // Get All Employees get '/'
  function get_employee_list(req, res) {
    Employee.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }
  
  // Get single employee  get '/read/:id'
  function get_employee_list_byId (req, res) {
    Employee.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }
  
  
  // Update employee  put '/update/:id'
  function empUpdateById (req, res, next){
    Employee.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  }
  
  // Delete employee  delete  '/delete/:id'
  function empDeleteById (req, res, next) {
    Employee.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  }
  
  module.exports = {
    create : create,
    getEmployee: get_employee_list,
    getEmployeeById: get_employee_list_byId,
    deleteEmployee: empDeleteById,
    updateEmployee: empUpdateById
  };