const express = require("express");

const router = express.Router();

const login_controller = require("../../controllers/users/login.controller"); 

router.post('/login/', login_controller.get_login);

module.exports = router;