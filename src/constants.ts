export const DAccounts: Array<IAccount> = [
  {
    id: 1,
    name: 'HDFC Bank',
    type: 'savings',
    imageURL: 'icon-hdfc.png',
  },
  {
    id: 2,
    name: 'State Bank of India',
    type: 'savings',
    imageURL: 'icon-sbi.png',
  },
  {
    id: 3,
    name: 'PayTM Bank',
    type: 'savings',
    imageURL: 'icon-paytm.png',
  },
]

export const DCategories: Array<ICategory> = [
  {
    id: 1,
    name: 'Food',
    imageURL: 'icon-food.png',
  },
  {
    id: 2,
    name: 'Cigarettes',
    imageURL: 'icon-cigarette.png',
  },
  {
    id: 3,
    name: 'Commute',
    imageURL: 'icon-commute.png',
  },
  {
    id: 4,
    name: 'Grocery',
    imageURL: 'icon-grocery.png',
  },
]

export const DTransactions: Array<ITransaction> = [
  {
    id: 1,
    date: '01 December, 2023',
    type: 'withdraw',
    accountId: 1,
    amount: 1000,
    notes: 'Transaction One',
    categoryId: 1,
  },
  {
    id: 2,
    date: '02 December, 2023',
    type: 'withdraw',
    accountId: 2,
    amount: 2000,
    notes: 'Transaction Two',
    categoryId: 2,
  },
  {
    id: 3,
    date: '03 December, 2023',
    type: 'withdraw',
    accountId: 3,
    amount: 3000,
    notes: 'Transaction Three',
    categoryId: 2,
  },
  {
    id: 4,
    date: '04 December, 2023',
    type: 'withdraw',
    accountId: 1,
    amount: 4000,
    notes: 'Transaction Four',
    categoryId: 4,
  },
  {
    id: 5,
    date: '05 December, 2023',
    type: 'withdraw',
    accountId: 2,
    amount: 1000,
    notes: 'Transaction Five',
    categoryId: 3,
  }
]

export const DTransactionTypes: Array<ITransactionType> = [
  {
    id: 1,
    name: 'Deposit',
    imageURL: 'icon-deposit.png'
  },
  {
    id: 2,
    name: 'Withdraw',
    imageURL: 'icon-withdraw.png'
  },
]