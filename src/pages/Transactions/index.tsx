import { Header } from "../../components/Header";
import { Summary } from "../Summary";
import { PriceHiglight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHiglight variant="income">R$ 12.000,00</PriceHiglight>
              </td>
              <td>Venda</td>
              <td>15/02/2022</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <PriceHiglight variant="outcome"> - R$ 12.000,00</PriceHiglight>
              </td>
              <td>Venda</td>
              <td>15/02/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}