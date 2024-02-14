const db = require("../ config/db");

async function getEnrollments() {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      connection.query("SELECT * FROM enrollment", (error, results) => {
        connection.release();
        if (error) return reject(error);
        resolve(results);
      });
    });
  });
}

module.exports = { getEnrollments };
