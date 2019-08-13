//import subject model
const Quiz = require("../../models/quiz.model");
const Subject = require("../../models/subject.model");

exports.get_list = (req, res) => {
    Quiz.find({ subject: { _id: req.params.id } })
        .populate('subject')
        .exec((error, quizzes) => {
            if(error) return res.status(400).send(error);
            res.json(quizzes);
        });
};

exports.get_add = async (req, res) => {
    const quiz = new Quiz(req.body);
    try {
        const save_quiz = await quiz.save();
        res.send(save_quiz);
    } catch (error) {
        res.status(400).send(error);
    }
};