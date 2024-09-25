const express = require("express");
const { getAllCourses, addCourse, editCourse } = require("./courses.controllers");
const courseRouter = express.Router();

courseRouter.route("/")
    .get(getAllCourses)
    .post(addCourse)

courseRouter.put("/:id", editCourse)


module.exports = courseRouter;
