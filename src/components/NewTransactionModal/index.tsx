import Modal from 'react-modal'

import { Container } from './styles';

interface IModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onCloseNewTransactionModal: () => void
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
  onCloseNewTransactionModal
}: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>Nova transação</h1>
      <button type="button" onClick={onCloseNewTransactionModal}>
        Fechar
      </button>
    </Modal>
  )
}
