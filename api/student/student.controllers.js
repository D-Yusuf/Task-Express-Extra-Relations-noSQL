const Student = require("../../models/Student");
const Course = require("../../models/Course");

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().populate("courses", ["title", "enrolled"]);
    return res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const addStudent = async(req, res, next)=>{
  try {
    if(req.body.courses){
      const added = await Student.create({...req.body, $push: {courses: req.body.courses} }) // courses will be id
      await Course.updateMany({_id: req.body.courses}, {enrolled: +1, $push: {students: added._id}})

      return res.status(201).json(added)
    }
    const added = await Student.create(req.body)
    return res.status(201).json(added)
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllStudents, addStudent };
