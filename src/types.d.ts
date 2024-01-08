type ICategory = {
  id: number
  name: string
  imageURL: string
  spentAmount: number
  limitAmount: number
}

type IAccount = {
  id: number
  name: string
  type: "savings" | "credit"
  imageURL: string
}

type ITransaction = {
  id: number
  date: string
  type: "deposit" | "withdraw" | null
  accountId: number
  amount: number
  notes: string
  categoryId: number
}

type ITransactionType = {
  id: number
  name: "Deposit" | "Withdraw"
  imageURL: string
}

type ITab = {
  id: number
  name: string
  isSelected: boolean
}
