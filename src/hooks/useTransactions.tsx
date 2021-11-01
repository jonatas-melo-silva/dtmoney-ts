import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ITransaction {
  id: number
  title: string
  amount: number
  transactionType: string
  category: string
  createAt: Date
}

type TransactionRequest = Omit<ITransaction, 'id' | 'createAt'>

interface ITransactionsProviderProps {
  children: React.ReactNode
}

interface ITransactionsContext {
  transactions: ITransaction[]
  createTransaction: (transaction: TransactionRequest) => Promise<void>
}

const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
)

export const TransactionsProvider = ({
  children
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionRequest: TransactionRequest) {
    const response = await api.post('/transactions', {
      ...transactionRequest,
      createAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
