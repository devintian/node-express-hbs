// Set up MySQL connection.
const mysql = require("mysql");
//when using, please change the path to "../config/config.json"
const config = require("../config/config.json");
//pool is to ensure that when the connection is lost
//with Error: Connection Lost the server closed the connection
//will re-connect the server
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    port: config.port,
    password: config.password,
    database: config.database
});

const query = function(sql, option, cb){
    pool.getConnection((err, conn) => {
        if(err) {
            cb(err, null, null);
        }else{
            conn.query(sql, option, (err, res, fields) => {
                cb(err, res, fields);
            });
            conn.release();
        }
    });
}
module.exports = query;
