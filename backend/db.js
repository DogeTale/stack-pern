import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "agus_postgre",
  password: "admin",
  database: "pern-stack-tup-db",
});

pool.on("connect", () => {
  console.log("conectado a la base de datos");
});
