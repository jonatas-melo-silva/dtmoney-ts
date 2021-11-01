import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 100,
        category: 'Food',
        createdAt: new Date()
      },
      {
        id: 2,
        title: 'Transaction 2',
        amount: 200,
        category: 'Food',
        createdAt: new Date()
      },
      {
        id: 3,
        title: 'Transaction 3',
        amount: 300,
        category: 'Food',
        createdAt: new Date()
      },
      {
        id: 4,
        title: 'Transaction 4',
        amount: 400,
        category: 'Food',
        createdAt: new Date()
      },
      {
        id: 5,
        title: 'Transaction 5',
        amount: 500,
        category: 'Food',
        createdAt: new Date()
      }
    ])
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
