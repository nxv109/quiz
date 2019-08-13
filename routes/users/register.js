const express = require("express");
const User = require("../../models/register.model");

const router = express.Router();

const register_controller = require("../../controllers/users/register.controller"); 

router.get('/list/', register_controller.get_list_user);

router.post('/register/', register_controller.get_add_user);

router.get('/test/', (req, res) => {
    User.find((err, doc) => {
        res.send(doc);
    });
});

//edit user profile
router.put('/editProfile/:id', register_controller.get_update_user_profile);

//edit password
router.put('/editPassword/:id', register_controller.get_update_user_password)

//forgot password
router.put('/forgotPassword', register_controller.get_forgot_password)


module.exports = router;