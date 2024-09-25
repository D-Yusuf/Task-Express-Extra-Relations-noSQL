const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {type: String, required: true},
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  enrolled: {type: Number, default: 0, max: 50}
});
module.exports = model("Course", courseSchema);
