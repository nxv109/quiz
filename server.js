const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//hanlde form body
app.use(express.json());

//access-control-allow-origin (cors)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT");
    next();
});
//import routes
//account
const register_route = require("./routes/users/register");
const login_route = require("./routes/users/login");
//subject
const subject_route = require("./routes/subjects/subject");
//quiz
const quiz_route = require("./routes/quizs/quiz");

//connect to mongodb
const mongo_url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/quiz';
mongoose.connect(mongo_url, { useNewUrlParser: true, useCreateIndex: true }, () => console.log('Connected to mongodb'));

//routes
//account
app.use('/api/users/', register_route);
app.use('/api/users/', login_route);
//subject
app.use('/api/subjects/', subject_route);
//quiz
app.use('/api/quizzes/', quiz_route);

//create server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to server at port ${port}`));
