import { useEffect, useState } from "react"
import { TransactionListContainer } from "./styles"
import { Transaction } from "../transaction/Transaction";
import { DTransactions } from "../../../constants";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Array<ITransaction>>([])

  useEffect(() => {
    if (DTransactions?.length > 0) {
      setTransactions(DTransactions)
    }
  }, [])

  return (
    transactions.length > 0 &&
    (
      <TransactionListContainer>
        {transactions.map((t) => <Transaction key={t.id} transaction={t}></Transaction>)}
      </TransactionListContainer>
    )
  )
}