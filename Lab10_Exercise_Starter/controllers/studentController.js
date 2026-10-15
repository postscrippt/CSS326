// controllers/studentController.js
const pool = require('../db');

// GET /api/students
exports.getAll = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, name, major FROM students ORDER BY id');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Something went WRONG!", sql: err.sql });
  }
};

// GET /api/students/:id/courses
exports.getCourses = async (req, res) => {
  try {
    // TODO (Exercise 3): UNSAFE! The id is glued into the SQL text.
    // Try:  /api/students/1 OR 1=1/courses
    // const sql =
    //   'SELECT c.id, c.title, e.grade FROM enrolments e ' +
    //   'JOIN courses c ON c.id = e.course_id ' +
    //   'WHERE e.student_id = ' + req.params.id;
    const [rows] = await pool.query(`SELECT c.id, c.title, e.grade FROM enrolments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.student_id = ?`,[req.params.id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong", sql: err.sql });
  }
};
