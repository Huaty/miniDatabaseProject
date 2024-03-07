const db = require("../config/db");

async function getCoursesAssessment() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      const query = `
      SELECT  
        c.courseName AS courseTitle, 
        a.assessmentTitle ,
        a.content,
        c.id
      FROM 
       assessments a
        JOIN 
        courses c ON a.courses_id = c.id`;

      connection.query(query, (error, results) => {
        connection.release();
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}
async function getCourses() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      const query = `
      SELECT  
        courseName, id FROM courses`;

      connection.query(query, (error, results) => {
        connection.release();
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}
module.exports = { getCourses, getCoursesAssessment };
