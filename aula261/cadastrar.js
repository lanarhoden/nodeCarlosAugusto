var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root', 
    password:'aluno',
    database:'lana'
});

connection.connect();
    query = "INSERT INTO usuario (login, senha) VALUES ('lana@gmail.com', 'nsdkjaj');";
    connection.query(query, function(error, results, fields){
        if(error) throw error;
        console.log(results);
    });