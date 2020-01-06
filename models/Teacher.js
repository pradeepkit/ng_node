const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Create the TEacher Schema
Teacher = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true
    },
    created_by: { 
        type: String,
        require: true
    },
    data_of_birth: { 
        type: Date,
        required: true
    },
    mother_name: {
        type: String,
        required: true
    },
    subjects: {
        type: [],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        address: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        pin_code: {
            type: Number,
            required: false
        },
    },
    
    mobile_no: {
        type: String,
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
}, {collection: 'teacher'});

Teacher.pre('save', function (next) {
    var teacher = this;
    bcrypt.hash(teacher.password, 10, function (err, hash){
        if (err) {
        return next(err);
        }
        teacher.password = hash;
        next();
    })
});


/* Teacher.path('email').validate(function(value, done) {
    this.model('Teacher').count({ email: value }, function(err, count) {
        if (err) {
            console.log('done', count)
            return done;
        } 
        // If `count` is greater than zero, "invalidate"
        if(!count)  {
            res.json('Email already exists') ;
         };
        console.log('eeee',count)
    });
}, 'Email already exists'); */


module.exports = mongoose.model('Teacher', Teacher)