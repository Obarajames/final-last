const mongoose = require('mongoose')
//function for mongoose schema
const Schema = mongoose.Schema
//outlines what our post will entail
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
//export the schema
module.exports = mongoose.model('workout',workoutSchema)

