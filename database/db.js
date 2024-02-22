const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Espapo1986+',
  database: 'db_desmos',
  port: 3306
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};

module.exports = { query };
