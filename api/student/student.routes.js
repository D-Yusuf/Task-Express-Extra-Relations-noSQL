const express = require("express");
const { getAllStudents, addStudent } = require("./student.controllers");
const studentRouter = express.Router();

studentRouter.route("/")
    .get(getAllStudents)
    .post(addStudent)
module.exports = studentRouter;
