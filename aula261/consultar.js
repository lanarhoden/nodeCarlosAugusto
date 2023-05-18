var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root', 
    password:'aluno',
    database:'lana'
});

connection.connect();
    query = "select * from usuario;";
    connection.query(query, (error, results, fields) => {
            if (error)
                throw error;
            console.log(results);
        });