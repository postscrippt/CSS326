//Exercise 5: Objects, arrays & the in-memory database
let students = [];

function addStudent(id, name, age) {
    students.push({ id, name, age });
}

function findById(id) {
    return students.find(s => s.id === id);
}

addStudent(1, 'Somchai', 20);
addStudent(2, 'Suda', 21);
console.log(students);
console.log(findById(2));

function listAll() {
    console.log(students);
}
function removeById(id) {
    students = students.filter(s => s.id !== id);
}

//Add three students
addStudent(3, 'Pinya', 18);
addStudent(4, 'Boeing', 20);
addStudent(5, 'Yayi', 20);

//remove one
removeById(2);

//call listAll()
listAll();