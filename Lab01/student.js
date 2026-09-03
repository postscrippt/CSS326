//Exercise 5: Objects, arrays & the in-memory database
let students = [];

function addStudent(id, name, age, year) {
    students.push({ id, name, age, year });
}

function findById(id) {
    return students.find(s => s.id === id);
}

addStudent(1, 'Somchai', 20, 4);
addStudent(2, 'Suda', 21, 5);
console.log(students);
console.log(findById(2));

function listAll() {
    console.log(students);
}
function removeById(id) {
    students = students.filter(s => s.id !== id);
}

//Add three students
addStudent(3, 'Pinya', 18, 3);
addStudent(4, 'Boeing', 20, 2);
addStudent(5, 'Yayi', 20, 10);

//remove one
removeById(2);

//call listAll()
listAll();

//print
for (let i = 0; i < students.length; i++) {
    console.log("ID: " + students[i].id + ", Name: " + students[i].name + ", Year: " + students[i].year)
}