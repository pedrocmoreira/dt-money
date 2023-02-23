import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionContextType';
import { Transactions } from './pages/Transactions';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}


