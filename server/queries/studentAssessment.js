const db = require("../ config/db");

async function getAssessments() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      connection.query("SELECT * FROM assessmentProgress", (error, results) => {
        connection.release();
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = { getAssessments };
