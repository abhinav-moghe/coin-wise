import { RebootCSS } from './global-styles'
import { ContainerHeader, Content, LeftContainer, TransactionContainer, ViewContainer } from './styles'

const App = () => {
  return (
    <>
      <RebootCSS></RebootCSS>
      <ViewContainer>
        <LeftContainer>
          {/* account */}
          {/* categories */}
        </LeftContainer>
        <TransactionContainer>
          <ContainerHeader>Recent Transaction(s)</ContainerHeader>
          <Content>Hello !</Content>
        </TransactionContainer>
      </ViewContainer>
    </>
  )
}

export default App
