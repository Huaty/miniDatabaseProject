const db = require("../ config/db");

async function getStudents() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      connection.query("SELECT * FROM students", (error, results) => {
        connection.release();
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = { getStudents };
