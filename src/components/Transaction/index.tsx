import { SearchForm } from "../SearchForm";
import {
  TransactionContainer,
  TransactionTable,
  PriceHighlight,
} from "./styles";

export function Transaction() {
  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento</td>
            <td>
              <PriceHighlight color="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2000</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento</td>
            <td>
              <PriceHighlight color="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2000</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento</td>
            <td>
              <PriceHighlight color="outcome">-R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2000</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento</td>
            <td>
              <PriceHighlight color="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2000</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  );
}
