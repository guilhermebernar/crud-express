import { Client } from "pg";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "postgres",
        host: "localhoast",
        database: "tests_products",
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;
