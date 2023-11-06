const mysql = require("mysql2");
const connectToSql = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "712123@daS",
    database: "appoiment_database"
});

module.exports= connectToSql