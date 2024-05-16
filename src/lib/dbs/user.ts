import connection from "@/configs/db.config";
import mysql, { RowDataPacket, QueryResult } from "mysql2/promise";

export const getALLUsers = async () => {
  const [rows] = await connection.query("SELECT * FROM users");
  return rows;
};
export const getInfoUser = async <T extends RowDataPacket>(): Promise<T[]> => {
  const query = `SELECT Id, name, email FROM users`;
  const [rows] = await connection.execute<T[]>(query);
  return rows;
};
