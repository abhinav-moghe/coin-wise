import { MutableRefObject, useRef } from "react"
import {
  AddButton,
  AddTransactionContainer,
  Footer,
  CancelButton,
  CloseButton,
  Input,
  TextArea,
  TransactionForm,
} from "./styles"
import { Header, HeaderText } from "../../../styles"
import { Image } from "../../../base-styles"
import { DAccounts, DCategories, DTransactionTypes } from "../../../constants"
import Dropdown from "../../ui/Dropdown/Dropdown"
import useClickOutside from "../../../hooks.ts/click-outside"

const AddTransaction = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

  useClickOutside(open, wrapperRef, () => onClose())

  return (
    <AddTransactionContainer ref={wrapperRef}>
      <Header>
        <HeaderText>Add Transaction</HeaderText>
        <CloseButton onClick={onClose}>
          {/* TO-DO: Add an SVG, change fill on hover */}
          <Image
            {...{ width: "8px", height: "8px" }}
            src="src/assets/icons/close.png"
          />
        </CloseButton>
      </Header>

      <TransactionForm>
        <Input type="date" />

        <Dropdown
          label="Select bank account"
          options={DAccounts}
          onSelectToParent={() => {}}
        />

        <Dropdown
          label="Select type of transaction"
          options={DTransactionTypes}
          onSelectToParent={() => {}}
        />

        <Input
          type="number"
          placeholder="Amount"
        />

        <Dropdown
          label="Select categories"
          options={DCategories}
          onSelectToParent={() => {}}
        />

        <TextArea placeholder="Notes . . ." />
      </TransactionForm>

      <Footer>
        <CancelButton
          width="100%"
          height="2rem"
          onClick={onClose}
        >
          Cancel
        </CancelButton>
        <AddButton
          width="100%"
          height="2rem"
        >
          Add
        </AddButton>
      </Footer>
    </AddTransactionContainer>
  )
}

export default AddTransaction
