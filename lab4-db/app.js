const mysql = require('mysql2/promise');

async function main() {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123#',
        database: 'lab4_sec5' // your Lab 3 schema
    });

    //SELECT
    const [rows] = await conn.query('SELECT * FROM students');
    console.log(rows.length, 'students');

    for (const s of rows) {
        console.log(s.name, '-', s.major, '-', s.year);
    }

    //Ex. 2 Write with placeholders
    // const [r1] = await conn.execute(
    //     'INSERT INTO students(name, major, year) VALUES (?,?,?)',
    //     ['Pearl', 'Dog Breeding', 4]
    // );
    // console.log('new id:', r1.insertId);

    let Mmajor = "Data Science";
    const [r2] = await conn.query('SELECT * FROM students WHERE major=?',
        [Mmajor]
    );
    // console.log('Data Science: ', r2)
    for (const s of r2) {
        console.log(s.name + " " + s.major + " " + s.year)
    }

    // const [r3] = await conn.execute(
    //     'UPDATE students SET year = year + 1 WHERE id = ?',
    //     [r1.insertId]
    // );
    // console.log('rows changed: ', r3.affectedRows);


}
main();
