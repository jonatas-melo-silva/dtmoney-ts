import Modal from 'react-modal'

import { Container } from './styles'

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button type="button" onClick={onCloseNewTransactionModal}>
          Fechar
        </button>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
