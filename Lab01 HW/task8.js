//Exercise 5: Objects, arrays & the in-memory database
let students = [];

function addStudent(id, name, year) {
    students.push({ id, name, year });
}

function findById(id) {
    return students.find(s => s.id === id);
}

function listAll() {
    for (let i = 0; i < students.length; i++) {
        console.log("ID: " + students[i].id + ", Name: " + students[i].name + ", Year: " + students[i].year)
    }
}
function removeById(id) {
    students = students.filter(s => s.id !== id);
}

//Add three students
addStudent(1, 'Pinya', 3);
addStudent(2, 'Boeing', 2);
addStudent(3, 'Yayi', 10);

//remove one
removeById(2);

//call listAll()
listAll();
