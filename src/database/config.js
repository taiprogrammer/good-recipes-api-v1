const mysql = require("mysql2");

const config = {
  host: "localhost",
  database: "recipes",
  user: "root",
  password: "urubutaiza",
  port: 3306,
  ssl: false,
};

function execute(instruction) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);

    connection.connect();
    connection.query(instruction, (error, result) => {
      connection.end();
      if (error) {
        reject(error);
      }
      resolve(result);
    });
    connection.on("error", (error) => {
      return `Erro no MYSQL Workbench ${error}`;
    });
  });
}

module.exports = { execute };
