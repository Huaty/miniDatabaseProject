const db = require("../config/db"); // Adjust the path if necessary

async function getEnrollments() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      // Use getConnection for pools
      if (err) return reject(err);

      const query = `
        SELECT 
          s.firstName, 
          s.lastName, 
          c.courseName AS courseTitle, 
          e.enrollmentDate 
        FROM 
          enrollment e 
          JOIN students s ON e.student_id = s.id 
          JOIN courses c ON e.course_id = c.id`;

      connection.query(query, (error, results) => {
        connection.release(); // Always release the connection back to the pool
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = { getEnrollments };
