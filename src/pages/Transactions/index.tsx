import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { TransactionsContext } from "../../contexts/TransactionContextType";
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
                    <PriceHiglight variant={transaction.type}>{transaction.price}</PriceHiglight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}