import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salary',
          amount: 1000,
          transactionType: 'deposit',
          category: 'salary',
          createAt: new Date('2021-01-01 09:00:00')
        },
        {
          id: 2,
          title: 'Salary',
          amount: 1000,
          transactionType: 'withdraw',
          category: 'salary',
          createAt: new Date('2020-01-01 10:00:00')
        },
        {
          id: 3,
          title: 'Salary',
          amount: 1000,
          transactionType: 'deposit',
          category: 'salary',
          createAt: new Date('2020-01-01 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
