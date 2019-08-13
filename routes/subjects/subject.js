const express = require("express");

const router = express.Router();

//import subject_controller
const subject_controller = require("../../controllers/subjects/subject.controller");

router.post('/add/', subject_controller.get_add);
router.get('/', subject_controller.get_list);

module.exports = router;