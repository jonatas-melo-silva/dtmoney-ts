import { createContext, useEffect, useState } from 'react'
import { api } from './services/api'

interface ITransaction {
  id: number
  title: string
  amount: number
  transactionType: 'deposit' | 'withdraw'
  category: string
  createAt: string
}

interface ITransactionResponse {
  transactions: ITransaction[]
}

interface ITransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext<ITransaction[]>([])

export const TransactionsProvider = ({children}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get<ITransactionResponse>('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
} 