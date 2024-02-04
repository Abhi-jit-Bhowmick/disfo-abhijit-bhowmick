const mongoose = require("mongoose");
const validator = require("validator");

const newUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        max: 50,
        default: ""
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        max: 20
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: (incomingEmail) => validator.isEmail(incomingEmail)
    }
})


const userModel = mongoose.model("User", newUserSchema);

module.exports = userModel
