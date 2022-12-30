const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    role: { type: Number, default: 1 }
});

module.exports = mongoose.model("User", userSchema);