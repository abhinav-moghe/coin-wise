import { PoolClient, QueryResult } from "pg"
import { ITransaction } from "../interfaces/transaction"
import pool from "../config/database"
import { getStrDateFromDate } from "../common/utils"

export const getAllTransactions = async (
  startDate: Date,
  endDate: Date
): Promise<Array<ITransaction>> => {
  const client: PoolClient = await pool.connect()

  try {
    const result: QueryResult<ITransaction> = await client.query(`
      SELECT
        *
      FROM transactions
        WHERE date BETWEEN '${getStrDateFromDate(startDate)}' AND '${getStrDateFromDate(endDate)}'
    `)
    return result.rows
  } finally {
    client.release()
  }
}
