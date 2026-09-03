const mysql = require('mysql2/promise');

async function main() {
    let conn;
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root123#',
            database: 'bookstore'
        });

        console.log('Connected');

        //task 2
        const [rows] = await conn.execute('SELECT * FROM books');

        for (const book of rows) {
            console.log(`${book.title} - ${book.price}`);
        }

        //task 3: Filter
        console.log();
        console.log("--------Task 3----------");
        const minPrice = 330;

        const [r3] = await conn.execute('SELECT title, price FROM books WHERE price > ?', [minPrice]);

        for (const book of r3) {
            console.log(`${book.title} - ${book.price}`);
        }

        //task 4: Insert
        console.log();
        console.log("--------Task 4----------");

        // const [r4] = await conn.execute('INSERT INTO books (title, author, price, stock) VALUES (?, ?, ?, ?)', ['Harry Potter and the Stone', 'Just Kidding', 9999, 120]);
        // console.log('Inserted with ID: ', r4.insertId);

        //task 5: update
        console.log();
        console.log("--------Task 5----------");

        const bookId = 13;

        // const [r5] = await conn.execute(
        //     'UPDATE books SET price = price * 1.10 WHERE id = ?', [bookId]
        // );

        // console.log('Rows updated: ', r5.affectedRows);

        //task 6: Delete
        console.log();
        console.log("--------Task 6----------");

        const bookDelete = 14;

        // const [r6] = await conn.execute('DELETE FROM books WHERE id = ?', [bookDelete]);
        // console.log("Deleted Rows: ", r6.affectedRows)

        //task 7: Join
        console.log();
        console.log("--------Task 7----------");

        const [r7] = await conn.execute(
            `SELECT c.name AS customer_name, b.title AS book_title, o.quantity
        FROM orders o
        INNER JOIN customers c ON o.customer_id = c.id
        INNER JOIN books b ON o.book_id = b.id`
        );

        for (const row of r7) {
            console.log(`${row.customer_name} ordered ${row.quantity}x "${row.book_title}"`);
        }
    } catch (err) {
        console.error('Error: ', err.message);
    } finally {
        if (conn) {
            await conn.end();
            console.log(`Connection Closed.`)
        }
    }


}

main();