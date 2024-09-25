const Course = require("../../models/Course");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    // const a = courses.map(course=>{
    //   return {...course, enrolled: course.students.length}
    // })
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

const addCourse = async(req, res, next)=>{
  try {
    const added = await Course.create(req.body)
    return res.status(201).json(added)
  } catch (error) {
    next(error)
  }
}

const editCourse = async(req, res, next)=>{
  try {
    const { id } = req.params
    await Course.findByIdAndUpdate(id, req.body)

    res.status(204).end()
  } catch (error) {
    next(error)
  }
}
module.exports = { getAllCourses, addCourse, editCourse };
