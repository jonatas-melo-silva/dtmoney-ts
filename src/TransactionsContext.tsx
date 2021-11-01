import { createContext, useEffect, useState } from 'react'
import { api } from './services/api'

interface ITransaction {
  id: number
  title: string
  amount: number
  transactionType: string
  category: string
  createAt: string
}

type TransactionRequest = Omit<ITransaction, 'id' | 'createAt'>

interface ITransactionResponse {
  transactions: ITransaction[]
}

interface ITransactionsProviderProps {
  children: React.ReactNode
}

interface ITransactionsContext {
  transactions: ITransaction[]
  createTransaction: (transaction: TransactionRequest) => void
  // deleteTransaction: (id: number) => Promise<void>
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
  )

export const TransactionsProvider = ({children}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get<ITransactionResponse>('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionRequest) {
    api.post('transactions', transaction).then(() => {
    })
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
} 