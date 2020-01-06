const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Member Schema
Student = new Schema({
    name: {
        type: String,
        required: true
    },
    roll_no: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    registraion_no: {
        type: String,
        required: true,
        unique: true,        
    },
    class: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true
    },
    teacher_name: { 
        type: 'ObjectId', 
        ref: 'Teacher' 

    },
    created_by: { 
        type: 'ObjectId', 
        ref: 'Admin'
    },
    data_of_birth: { 
        type: Date,
        required: true
    },
    mother_name: {
        type: String,
        required: true
    },
    guardian_name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    pin_code: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },

    cteate_on: {
        type: String,
        required: true
    }
}, {collection: 'students'})
module.exports = mongoose.model('Student', Student)