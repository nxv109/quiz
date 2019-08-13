const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quiz_schema = new Schema({
    question: { type: String, required: true },
    options: { type: Array, required: true },
    answer: { type: String, required: true },
    subject: { type: Schema.Types.ObjectId, ref: "Subject" }
});

module.exports = mongoose.model('Quiz', quiz_schema);