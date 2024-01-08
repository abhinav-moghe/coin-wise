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
import { DTabs } from "./constants"
import Overlay from "./components/ui/Overlay/Overlay"
import AddTransaction from "./components/transactions/newTransaction/AddTransaction"
import { TransactionList } from "./components/transactions/transactionList/TransactionList"
import Tabs from "./components/ui/Tabs/Tabs"
import Accounts from "./components/ui/Tabs/Accounts/Accounts"
import Categories from "./components/ui/Tabs/Categories/Categories"

const App = () => {
  const [showAddTransaction, setShowAddTransaction] = useState<boolean>(false)

  const [tabs, setTabs] = useState<Array<ITab>>(DTabs)

  return (
    <>
      <RebootCSS />
      <Theme />

      <ViewContainer>
        <LeftContainer>
          <Tabs
            tabs={tabs}
            setTabs={setTabs}
          />
          {tabs.map((ele: ITab) => {
            if (ele.isSelected) {
              if (ele.name === "Accounts") {
                return (
                  <Accounts>
                    <ButtonText>Accounts</ButtonText>
                  </Accounts>
                )
              } else if (ele.name === "Categories") {
                return <Categories></Categories>
              }
            }
          })}
        </LeftContainer>
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
