const mongoose = require("mongoose");

const { Schema } = mongoose;

const detailSchema = Schema({
    email: { type: String },
    studygroup: { type: String },
    studygroupName: { type: String },
    Fullname: { type: String },
});

module.exports = mongoose.model("details", detailSchema);