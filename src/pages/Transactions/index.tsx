import { useContext } from "react";

import { Header } from "../../components/Header";
import { TransactionsContext } from "../../contexts/TransactionContextType";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Summary } from "../Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHiglight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
  const {transactions} = useContext(TransactionsContext)

  return (  
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHiglight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHiglight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}