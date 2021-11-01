import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container } from './styles'

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

export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get<ITransactionResponse>('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.transactionType}>
                {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
