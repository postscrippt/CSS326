const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

let conn;
//for EX4.
app.use(express.static('public'));

async function main() {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123#',
        database: 'lab4_sec5' // your Lab 3 schema
    });

    app.listen(3000, () => console.log('http://localhost:3000')); //watches port 3000
}

main();

//Ex1
app.get('/', (req, res) => {
    res.send('Welcome to CSS326 Lab05!')
});

app.get('/Hello', (req, res) => {
    res.send('Hello! What is happening yo?')
});

app.get('/students', async (req, res) => {
    try {
        const major = req.query.major; //requests query here
        const [rows] = major
            ? await conn.execute(
                'SELECT * FROM students WHERE major = ?',
                [major])
            : await conn.query('SELECT * FROM students');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    // await conn.end();
    // res.json(rows);
});

//Ex2: Read from Database
app.get('/students/:id', async (req, res) => {
    try {
        const [rows] = await conn.execute(
            'SELECT * FROM students WHERE id = ?',
            [req.params.id]); //requests query here
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// app.get('/studentsmajor', async (req, res) => {
//     try {
//         const major = req.query.major; //requests query here
//         const [rows] = await conn.execute(
//             'SELECT * FROM students WHERE major = ?',
//             [major]);
//         res.json(rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Ex3: Post
app.use(express.json());
app.post('/students', async (req, res) => {
    const { name, major, year } = req.body;
    const [r3] = await conn.execute(
        `INSERT INTO students(name, major, year) VALUES (?, ?, ?)`,
        [name, major, year]
    );
    res.status(201).json({ id: r3.insertId });
});



