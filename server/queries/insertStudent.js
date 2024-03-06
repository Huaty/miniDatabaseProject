const db = require("../config/db");

async function createStudent(firstName, lastName, email, dateOfBirth) {
  return new Promise((resolve, reject) => {
    db.connect((err, connection) => {
      if (err) return reject(err);

      const query = `INSERT INTO students(firstName, lastName, email, dateOfBirth) VALUES (?, ?, ?, ?)`;
      connection.query(
        query,
        [firstName, lastName, email, dateOfBirth],
        (error, results) => {
          connection.release(); // Always release the connection back to the pool
          if (error) return reject(error);
          resolve(results);
        }
      );
    });
  });
}

module.exports = { createStudent };
