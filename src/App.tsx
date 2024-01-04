import { useState } from 'react'
import AddTransaction from './components/transactions/newTransaction/AddTransaction'
import { TransactionList } from './components/transactions/transactionList/TransactionList'
import { RebootCSS } from './global-styles'
import { BaseHeaderActions, BaseHeaderText, BaseImageStyles, Button, ButtonText, ContainerHeader, LeftContainer, TransactionContainer, ViewContainer } from './styles'
import Overlay from './components/ui/Overlay/Overlay'

const App = () => {
  const [showAddTransaction, setShowAddTransaction] = useState<boolean>(false)

  return (
    <>
      <RebootCSS />
      <ViewContainer>
        <LeftContainer>
          {/* Placeholder for account and category components */}
        </LeftContainer>
        <TransactionContainer>
          <ContainerHeader>
            <BaseHeaderText>
              Recent Transaction(s)
            </BaseHeaderText>
            <BaseHeaderActions>
              <Button onClick={() => setShowAddTransaction(true)}>
                <ButtonText>Add</ButtonText>
                <BaseImageStyles {...{ width: '16px', height: '16px' }} src='src/assets/icons/add.png' />
              </Button>
              {
                showAddTransaction &&
                <Overlay>
                  <AddTransaction open={true} onClose={() => setShowAddTransaction(false)} />
                </Overlay>
              }
            </BaseHeaderActions>
          </ContainerHeader>
          <TransactionList></TransactionList>
        </TransactionContainer>
      </ViewContainer>
    </>
  )
}

export default App
