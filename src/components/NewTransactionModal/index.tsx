import { useState, FormEvent } from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, TransactionType } from './styles'

interface IModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: IModalProps) => {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [category, setCategory] = useState<string>('')
  const [transactionType, setTransactionType] = useState<string>('deposit')

  async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      transactionType
    })
    
    setTitle('')
    setAmount(0)
    setCategory('')
    setTransactionType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <TransactionType
            type="button"
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionType>
          <TransactionType
            type="button"
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionType>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
