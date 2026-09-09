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
        database: 'bookstore' // your Lab 3 schema
    });

    app.get('/', (req, res) => {
        res.send('Welcome!');
    });

    app.listen(3000, () => console.log('http://localhost:3000')); //watches port 3000
}

main();

//Ex2. Returns All Books
// app.get('/Books', async (req, res) => {
//     try {
//         const [rows] = await conn.query(
//             'SELECT * FROM Books');
//         res.json(rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// })

//Ex3. Return Book By ID
app.get('/Books/:id', async (req, res) => {
    try {
        const [rows] = await conn.execute(
            'SELECT * FROM Books WHERE id = ?',
            [req.params.id]); //requests query here

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Ex4. Query
app.get('/Books', async (req, res) => {
    try {

        if (req.query.author) {
            const [rows] = await conn.query(
                'SELECT * FROM Books WHERE author = ?',
                [req.query.author]
            )
            return res.json(rows);
        }
        const [rows] = await conn.query(
            'SELECT * FROM Books');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

//Ex5. Add Book
app.use(express.json());
app.post('/books', async (req, res) => {
    try {
        const { title, author, price, stock } = req.body;

        const [result] = await conn.execute(
            'INSERT INTO books (title, author, price, stock) VALUES (?, ?, ?, ?)',
            [title, author, price, stock]
        );

        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create book' });
    }

});

//Ex6. Inner Join
app.get('/orders/details', async (req, res) => {
    try {
        const [r5] = await conn.execute(`
    SELECT c.name AS customer_name, b.title AS book_title, o.quantity
    FROM orders o
    INNER JOIN customers c ON o.customer_id = c.id
    INNER JOIN books b ON o.book_id = b.id`);
        res.json(r5);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch order details' });
    }

})

//ex. 8
app.use(express.static('public'));