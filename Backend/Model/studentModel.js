let students =
    [
        { id: 1, name: "Sara", course: "Node.js" },
        { id: 2, name: "Bilal", course: "React" }
    ];
    
export function findAll() {
    return students;
}

export function findById(id) {
    return students.find((s) => s.id === id);
}

export function create(student) {
    students.push(student);
    return student;
}

export function update(id, data) {
    const student = students.find((s) => s.id === id);
    if (!student) return null;
    if (data.name) student.name = data.name;
    if (data.course) student.course = data.course;
    return student;
}

export function remove(id) {
    const student = students.find((s) => s.id === id);
    if (!student) return null;
    students = students.filter((s) => s.id !== id);
    return student;
}
