import * as Student from "../models/studentModel.js";
// GET /api/students
export function getStudents(req, res) {
    res.status(200).json(Student.findAll());
}

// GET /api/students/:id
export function getStudent(req, res) {
    const student = Student.findById(Number(req.params.id));
    if (!student) {
        return res.status(404).json(
            {
                message: "Student not found"
            }
        );
    }
    res.status(200).json(student);
}

// POST /api/students
export function addStudent(req, res) {
    const { name, course } = req.body;
    if (!name || !course) {
        return res.status(400).json(
            {
                message: "Name and course are required"
            }
        );
    }
    const newStudent = Student.create(
        {
            id: Date.now(), name, course
        }
    );
    res.status(201).json(newStudent);
}

// PUT /api/students/:id
export function updateStudent(req, res) {
    const student = Student.update(Number(req.params.id), req.body);
    if (!student) {
        return res.status(404).json(
            {
                message: "Student not found"

            }
        );
    }
    res.status(200).json(student);
}

// DELETE /api/students/:id
export function deleteStudent(req, res) {
    const student = Student.remove(Number(req.params.id));
    if (!student) {
        return res.status(404).json(
            {
                message: "Student not found"
            }
        );
    }
    res.status(200).json({ message: "Student deleted" });
}
