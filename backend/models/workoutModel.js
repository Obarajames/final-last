const mongoose = require('mongoose')
//function with schema
const Schema = mongoose.Schema
//what project will have
const workoutSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('workout',workoutSchema)

