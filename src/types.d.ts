type ICategory = {
  id: number,
  name: string,
  imageURL: string,
}

type IAccount = {
  id: number,
  name: string,
  type: 'savings' | 'credit',
  imageURL?: string,
}

type ITransaction = {
  id: number,
  date: string,
  type: 'deposit' | 'withdraw',
  accountId: number,
  amount: number,
  notes: string,
  categoryId: number,
}