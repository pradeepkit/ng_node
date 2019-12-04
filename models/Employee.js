const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    designation: {
        type: String
    }},
     {collection: 'employees'})

    module.exports = mongoose.model('Employee', Employee)