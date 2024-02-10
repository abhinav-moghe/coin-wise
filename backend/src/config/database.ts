import { Pool } from "pg"

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "#POSTabhi123",
  database: "coin-wise-database",
})

export default pool
