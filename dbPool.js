const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xjyns25gc0ubt5b6",
    password: "maavv9ycu3t814r1",
    database: "e2qwjcmcnncqdeh2"
});

module.exports = pool;