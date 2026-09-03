const mysql = require('mysql2/promise');

async function main() {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123#',
        database: 'lab4_sec5'
    });
    try {
        const [rows] = await conn.query('SELECT * FROM students');
        console.log(rows);

        // for (const s of rows) {
        //     console.log(s.name)
        // }
        const [r1] = await conn.query('SELECT * FROM student');
        console.log(r1);
    } catch (err) {
        console.error('Queue failed:', err.message);
    } finally {
        await conn.end();
    }
}

main();