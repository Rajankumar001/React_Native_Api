const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
    },
    requests: [{
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        message: {
            type: String,
        },
        status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending",
        }
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model('User', userSchema);
