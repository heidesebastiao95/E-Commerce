import Mysql from "mysql2";

const Pool = Mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ecommerce_store",
    password: ""
});

export default Pool.promise();