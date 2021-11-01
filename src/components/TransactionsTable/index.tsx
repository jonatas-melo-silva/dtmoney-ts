import React, { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (<Container>
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
        <tr>
          <td>Gás de cozinha</td>
          <td className="deposit">+ R$19.90</td>
          <td>Lazer</td>
          <td>10/04/2020</td>
        </tr>
        <tr>
          <td>Safado</td>
          <td className="withdraw">- R$30.00</td>
          <td>Saúde</td>
          <td>10/04/2020</td>
        </tr>
        <tr>
          <td>Gás de cozinha</td>
          <td className="deposit">+ R$19.90</td>
          <td>Lazer</td>
          <td>10/04/2020</td>
        </tr>
        <tr>
          <td>Safado</td>
          <td className="withdraw">- R$30.00</td>
          <td>Saúde</td>
          <td>10/04/2020</td>
        </tr>
      </tbody>
    </table>
  </Container>)
}
