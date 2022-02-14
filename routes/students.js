const { Router } = require("express");
const { createStudent,getAllStudents,getStudent,updateStudent,deleteStudent} = require("../controllers/students");
const router = Router();
router.route("").post(createStudent).get(getAllStudents).get(getStudent);
router.route("./:id").get(getStudent);

module.exports = router;
