import { TransactionList } from './components/transactions/transactionList/TransactionList'
import { RebootCSS } from './global-styles'
import { Button, ButtonIcon, ButtonText, ContainerHeader, HeaderActions, HeaderText, LeftContainer, TransactionContainer, ViewContainer } from './styles'

const App = () => {
  return (
    <>
      <RebootCSS />
      <ViewContainer>
        <LeftContainer>
          {/* Placeholder for account and category components */}
        </LeftContainer>
        <TransactionContainer>
          <ContainerHeader>
            <HeaderText>
              Recent Transaction(s)
            </HeaderText>
            <HeaderActions>
              <Button>
                <ButtonText>Add</ButtonText>
                <ButtonIcon src='src/assets/icons/add.png' />
              </Button>
            </HeaderActions>
          </ContainerHeader>
          <TransactionList></TransactionList>
        </TransactionContainer>
      </ViewContainer>
    </>
  )
}

export default App
