//import subject model
const Subject = require("../../models/subject.model");

exports.get_add = async (req, res) => {
    const subject = new Subject(req.body);
    try {
        const save_subject = await subject.save();
        res.send(save_subject);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.get_list = (req, res) => {
    Subject.find((error, doc) => {
        try {
            res.json(doc);
        } catch (error) {
            res.status(400).send(error);
        }
    });
};