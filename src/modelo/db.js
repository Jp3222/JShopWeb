const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: '3306',
    database: 'db_jshop'
})

module.exports = pool