import { TransactionList } from './components/transactions/transactionList/TransactionList'
import { RebootCSS } from './global-styles'
import { ContainerHeader, LeftContainer, TransactionContainer, ViewContainer } from './styles'

const App = () => {
  return (
    <>
      <RebootCSS />
      <ViewContainer>
        <LeftContainer>
          {/* Placeholder for account and category components */}
        </LeftContainer>
        <TransactionContainer>
          <ContainerHeader>Recent Transaction(s)</ContainerHeader>
          <TransactionList></TransactionList>
        </TransactionContainer>
      </ViewContainer>
    </>
  )
}

export default App
