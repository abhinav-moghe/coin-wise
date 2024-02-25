export interface ITransaction {
  id: number
  accountId: number
  date: Date
  type: "deposit" | "withdraw"
  amount: number
  notes: string
  categories: Array<number>
}
