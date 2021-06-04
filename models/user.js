const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: "Name is required"
    },
    lastName: {
        type: String,
        required: "Name is required"
    },
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."],
        bcrypt: true
    },

    email: {
        required: "Email is required",
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    reserve1: {
        default: false,
        type: Boolean
    },
    reserve5: {
        default: false,
        type: Boolean
    },
    reserve10: {
        default: false,
        type: Boolean
    },

    userCreated: {
        type: Date,
        default: Date.now
    },



});

const User = mongoose.model("User", UserSchema);

module.exports = User;
