import mysql from "mysql2";
const connection = mysql.createPool({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});
export default connection.promise();
