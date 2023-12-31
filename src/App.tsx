import { TransactionList } from './components/transactions/transactionList/TransactionList'
import { RebootCSS } from './global-styles'
import { Button, ButtonIcon, ContainerHeader, HeaderActions, HeaderText, LeftContainer, TextSpan, TransactionContainer, ViewContainer } from './styles'

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
                <TextSpan>Add</TextSpan>
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
