import { useEffect, useState } from "react"
import {
  Amount,
  CategoryIconCircle,
  CategoryName,
  CategoryNameAndDate,
  Date,
  TransactionContainer,
} from "./styles"
import { Image } from "../../../base-styles"
import { DAccounts, DCategories } from "../../../constants"

export const Transaction = ({ transaction }: { transaction: ITransaction }) => {
  const [category, setCategory] = useState<ICategory | undefined>(undefined)

  const [account, setAccount] = useState<IAccount | undefined>(undefined)

  useEffect(() => {
    const foundCategory: ICategory | undefined = DCategories.find(
      (c: ICategory) => c.id === transaction?.categoryId
    )
    const foundAccount: IAccount | undefined = DAccounts.find(
      (a: IAccount) => a.id === transaction?.accountId
    )

    setCategory(foundCategory)
    setAccount(foundAccount)
  }, [transaction])

  if (!transaction) {
    return null
  }

  return (
    transaction && (
      <TransactionContainer>
        <CategoryIconCircle>
          <Image
            width="1.5rem"
            height="1.5rem"
            src={`src/assets/images/${category?.imageURL}`}
          />
        </CategoryIconCircle>
        <CategoryNameAndDate>
          <CategoryName>
            {category?.name} - {transaction.notes}
          </CategoryName>
          <Date>
            {transaction.date} • From {account?.name}
          </Date>
        </CategoryNameAndDate>
        <Amount>{transaction.type === "withdraw" ? "-" : "+"}₹1,000</Amount>
      </TransactionContainer>
    )
  )
}
