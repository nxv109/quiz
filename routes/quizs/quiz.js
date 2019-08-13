const express = require("express");

const router = express.Router();

//import quiz_controller
const quiz_controller = require("../../controllers/quizs/quiz.controller");

router.get('/list/:id', quiz_controller.get_list);
router.post('/add/', quiz_controller.get_add);

module.exports = router;