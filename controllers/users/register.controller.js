const Register = require("../../models/register.model");
const bcrypt = require("bcryptjs");
const { register_validation, forgot_password_validation } = require("../../validation");

exports.get_add_user = async (req, res) => {

    //let's validation 
    const {error} = await register_validation(req.body);
    //check user existed
    const email_exist = await Register.findOne({ email: req.body.email });
    // if(error) return res.json({ message: error.details[0].message });
    if(error){
        return res.json({ message: "Bạn đã nhập mật khẩu/email chưa chính xác!" });
    }else if(email_exist){
        return res.json({ message: 'Người dùng đã tồn tại!' })
    };

    //check user existed
    // const email_exist = await Register.findOne({ email: req.body.email });
    // if(email_exist) return res.json({ message: 'Người dùng đã tồn tại!' }); 

    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hash_password = await bcrypt.hashSync(req.body.password, salt);

    //create new user
    const register = new Register({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hash_password
    });
    try {
        const save_register = await register.save();
        res.json({ message: "Bạn đã đăng ký thành công!" });
    } catch (error) {
        res.json(error);
    }
};

exports.get_list_user = (req, res) => {
    Register.find((err, doc) => {
        res.json(doc);
    });
}

exports.get_update_user_profile = async (req, res) => {
    //hash password
    // const salt = bcrypt.genSaltSync(10);
    // const hash_password = await bcrypt.hashSync(req.body.password, salt);
    
    const users = {
        fullName: req.body.fullName,
        email: req.body.email,
        // password: hash_password
    };

    Register.findOneAndUpdate({ _id: req.params.id }, users, { new: true, useFindAndModify: false }, (err, doc) => {
        res.json({ message: "Sửa thành công" });
    })
};

exports.get_update_user_password = async (req, res) => {
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hash_password = await bcrypt.hashSync(req.body.password, salt);
    
    const users = {
        password: hash_password
    };

    Register.findOneAndUpdate({ _id: req.params.id }, users, { new: true, useFindAndModify: false }, (err, doc) => {
        res.json({ message: "Sửa thành công" });
    })
};

exports.get_forgot_password = async (req, res) => {

    //get _id user
    const user = await Register.findOne({ email: req.body.email });
    
    if(!user){
        return res.json({ message: "Người dùng không tồn tại!" });
    };

    //compare password
    const valid_password = await bcrypt.compareSync(req.body.oldPassword, user.password);
    if(!valid_password) return res.json({ message: 'Mật khẩu cũ chưa chính xác' });

    //hash password
    const salt = await bcrypt.genSaltSync(10);
    const hash_password = await bcrypt.hashSync(req.body.newPassword, salt);

    const users = {
        email: req.body.email,
        password: hash_password
    };

    Register.findOneAndUpdate({ _id: user._id}, users, { new: true, useFindAndModify: false }, (err, doc) => {
        res.json({ message: "Đổi mật khẩu thành công" });
    })
};