import { useEffect, useState } from "react"
import { DAccounts, DCategories } from "../../../constants"
import { Amount, CategoryIconCircle, CategoryImg, CategoryName, CategoryNameAndDate, Date, TransactionContainer } from "./styles"

export const Transaction = ({ transaction }: { transaction: ITransaction }) => {
  const [category, setCategory] = useState<ICategory | undefined>(undefined)

  const [account, setAccount] = useState<IAccount | undefined>(undefined)

  useEffect(() => {
    const foundCategory: ICategory | undefined = DCategories
      .find((c: ICategory) => c.id === transaction?.categoryId)
    const foundAccount: IAccount | undefined = DAccounts
      .find((a: IAccount) => a.id === transaction?.accountId)

    setCategory(foundCategory)
    setAccount(foundAccount)

  }, [transaction])

  if (!transaction) {
    return null
  }

  return (
    transaction &&
    (
      <TransactionContainer>
        <CategoryIconCircle>
          <CategoryImg src={`src/assets/images/${category?.imageURL}`} />
        </CategoryIconCircle>
        <CategoryNameAndDate>
          <CategoryName>{category?.name} - {transaction.notes}</CategoryName>
          <Date>{transaction.date} • From {account?.name}</Date>
        </CategoryNameAndDate>
        <Amount>{transaction.type === 'withdraw' ? '-' : '+'}₹1,000</Amount>
      </TransactionContainer>
    )
  )
}