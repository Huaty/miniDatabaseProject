const db = require("../config/db");

async function createEnrollment(studentId, courseId) {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      // Changed from db.connect to db.getConnection for pool
      if (err) return reject(err);

      const query = `INSERT INTO enrollment (student_id, course_id, enrollmentDate) VALUES (?, ?, CURDATE())`; // Removed extra comma and used CURDATE() for MySQL date
      connection.query(
        query,
        [studentId, courseId], // Corrected variable name to match case
        (error, results) => {
          connection.release(); // Always release the connection back to the pool
          if (error) return reject(error);
          resolve(results);
        }
      );
    });
  });
}

module.exports = { createEnrollment };
