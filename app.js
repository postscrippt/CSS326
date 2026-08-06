// console.log('test test test')
// let age = 20;
// const pi = 3.14;

// console.log(age);
// console.log(pi);

//Exercise 1: Variables, types & running in VS Code
let name = 'Pinya';
let age = 18;
let isStudent = true;
console.log(name + ' is ' + age + ' (student: ' + isStudent + ')');

//Exercise 2: Conditionals -- Grade Classifier
let score = 6;
if (score >= 80) {
    console.log('A');
} else if (score >= 70) {
    console.log('B');
} else if (score >= 50) {
    console.log('C');
} else {
    console.log('F');
}

//Exercise 3: Loops & a simple stopwatch
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let t = 5;
const timer = setInterval(() => {
    console.log(t);
    t--;
    if (t < 0) {
        clearInterval(timer); console.log("Time's up!");
    }
}, 1000)

//Exercise 4: Type errors -- predict, then catch
let price = 25;
// console.log(price.toUpperCase());
try {
    console.log(price.toUpperCase());
} catch (err) {
    console.log('Type error:', err.message);
}

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