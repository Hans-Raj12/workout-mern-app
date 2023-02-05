const mongoose = require('mongoose')

const Scehema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema)