const Register = require("../../models/register.model");
const bcrypt = require("bcryptjs");
const {login_validation} = require("../../validation");

exports.get_login = async (req, res) => {
    //let's validation
    const {error} = login_validation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    if(error) return res.json({ message: "Email/password chưa chính xác" });

    // check user existed
    const user = await Register.findOne({ email: req.body.email });
    // console.log(user._conditions.email);
    // console.log(user);
    if(!user) return res.json({ message: "Người dùng không tồn tại" });

    //compare password
    const valid_password = await bcrypt.compareSync(req.body.password, user.password);
    if(!valid_password) return res.json({ message: 'Mật khẩu chưa chính xác' });

    res.json({ message: "Đăng nhập thành công!", status: true });
};
