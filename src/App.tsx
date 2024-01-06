import { useState } from "react"
import { RebootCSS, Theme } from "./global-styles"
import {
  HeaderActions,
  HeaderText,
  Button,
  ButtonText,
  ContainerHeader,
  LeftContainer,
  TransactionContainer,
  ViewContainer,
} from "./app-styles"
import { Image } from "./base-styles"
import Overlay from "./components/ui/Overlay/Overlay"
import AddTransaction from "./components/transactions/newTransaction/AddTransaction"
import { TransactionList } from "./components/transactions/transactionList/TransactionList"

const App = () => {
  const [showAddTransaction, setShowAddTransaction] = useState<boolean>(false)

  return (
    <>
      <RebootCSS />
      <Theme />

      <ViewContainer>
        <LeftContainer>{/* Placeholder for account and category components */}</LeftContainer>
        <TransactionContainer>
          <ContainerHeader>
            <HeaderText>Recent Transaction(s)</HeaderText>
            <HeaderActions>
              <Button onClick={() => setShowAddTransaction(true)}>
                <ButtonText>Add</ButtonText>
                <Image
                  {...{ width: "16px", height: "16px" }}
                  src="src/assets/icons/add.png"
                />
              </Button>
              {showAddTransaction && (
                <Overlay>
                  <AddTransaction
                    open={true}
                    onClose={() => setShowAddTransaction(false)}
                  />
                </Overlay>
              )}
            </HeaderActions>
          </ContainerHeader>
          <TransactionList></TransactionList>
        </TransactionContainer>
      </ViewContainer>
    </>
  )
}

export default App
