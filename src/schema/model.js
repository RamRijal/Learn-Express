import { model } from "mongoose";
import studentSchema from "./student-schema.js";
import teacherSchema from "./teacher-schema.js";
import bookSchema from "./book-schema.js";
import userSchema from "./users-schema.js";
import traineeSchema from "./trainee-schema.js";
import webuserSchema from "./webUser.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";

export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Book = model("Book", bookSchema);

export let User = model("User", userSchema);
export let Trainee = model("Trainee", traineeSchema);
export let Webuser= model("Webuser",webuserSchema)
export let Product= model("Product",productSchema)
export let Review= model("Review",reviewSchema)


// model name should be singular with first letter capital
// must match with variable name - let Student = model("Student");