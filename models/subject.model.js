const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subject_schema = new Schema({
    subject: { type: String, required: true },
    descriptions: { type: String, required: true },
    quiz: [{ type: Schema.Types.ObjectId, ref: "Quiz" }]
});

module.exports = mongoose.model('Subject', subject_schema);