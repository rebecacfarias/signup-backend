const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    company: {
        required: true,
        type: String
    },
    jobTitle: {
        required: false,
        type: String
    },
    workEmail: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('User', userSchema)
