const db = require("../config/db");

async function getStudentDetailsWithEnrollment(studentId) {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      // Use getConnection to get a connection from the pool
      if (err) return reject(err);

      const query = `
      SELECT 
        s.id AS student_id, 
        s.firstName, 
        s.lastName, 
        e.course_id, 
        ap.assessments_id, 
        ap.completed as completed,
        a.assessmentTitle AS assessment_title, 
        ap.mark
      FROM 
        students s
      JOIN 
        enrollment e ON s.id = e.student_id
      JOIN 
        assessmentProgress ap ON e.id = ap.enrollment_id
      JOIN 
        assessments a ON ap.assessments_id = a.id
      WHERE 
        s.id = ?`;
      connection.query(query, [studentId], (error, results) => {
        connection.release(); // Always release the connection back to the pool
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

async function getStudentDetailsWithSchedule(studentId) {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      // Use getConnection to get a connection from the pool
      if (err) return reject(err);

      const query = `
      SELECT 
      ss.*, 
      l.lessonTitle AS lesson_title
    FROM 
      srsSchedule ss
    JOIN 
      lessonProgress lp ON ss.lessonProgress_id = lp.id
    JOIN 
      lessons l ON lp.lessons_id = l.id
    WHERE 
      lp.id IN (
        SELECT 
          lp.id 
        FROM 
          lessonProgress lp
        JOIN 
          enrollment e ON lp.enrollment_id = e.id
        JOIN 
          students s ON e.student_id = s.id
        WHERE 
          s.id = ?
      );
    
      `;
      connection.query(query, [studentId], (error, results) => {
        connection.release(); // Always release the connection back to the pool
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = {
  getStudentDetailsWithEnrollment,
  getStudentDetailsWithSchedule,
};
