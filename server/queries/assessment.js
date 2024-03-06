const db = require("../config/db");

async function getAssessmentsByMark(minMark) {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      const query = `
      SELECT 
      enrollment.student_id, 
      students.firstName, 
      students.lastName,
      assessments.courses_id, 
      assessments.id AS assessment_id, 
      assessments.assessmentTitle,
      assessmentProgress.completed, 
      assessmentProgress.MARK
  FROM 
      assessmentProgress
  JOIN 
      assessments ON assessmentProgress.assessments_id = assessments.id
  JOIN 
      enrollment ON assessmentProgress.enrollment_id = enrollment.id
  JOIN 
      students ON enrollment.student_id = students.id
  WHERE 
      assessmentProgress.MARK >= ?;
  
      `;
      connection.query(query, [minMark], (error, results) => {
        connection.release(); // Always release the connection back to the pool
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = { getAssessmentsByMark };
