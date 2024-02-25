import { Request, Response } from "express"
import { getAllTransactions } from "../models/transaction.model"
import { ITransaction } from "../interfaces/transaction"
import { getDateFromQueryParameters } from "../common/utils"

export const getTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { startDate, endDate } = req.query

    const transactions: Array<ITransaction> = await getAllTransactions(
      getDateFromQueryParameters(startDate),
      getDateFromQueryParameters(endDate)
    )

    res.json(transactions)
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}
