import { MutableRefObject, useRef } from "react"
import { AddTransactionContainer, BaseFooterStyles, CloseButton, Input, PrimaryButton, SecondaryButton, TextArea, TransactionForm } from "./styles"
import Dropdown from "../../ui/Dropdown/Dropdown"
import { BaseHeaderStyles, BaseHeaderText, BaseImageStyles } from "../../../styles"
import useClickOutside from "../../../hooks.ts/click-outside"
import { DAccounts, DCategories, DTransactionTypes } from "../../../constants"

const AddTransaction = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

  useClickOutside(open, wrapperRef, () => onClose())

  return (
    <AddTransactionContainer ref={wrapperRef}>
      <BaseHeaderStyles>
        <BaseHeaderText>
          Add Transaction
        </BaseHeaderText>
        <CloseButton onClick={onClose}>
          {/* TO-DO: Add an SVG, change fill on hover */}
          <BaseImageStyles {...{ width: '8px', height: '8px' }} src='src/assets/icons/close.png' />
        </CloseButton>
      </BaseHeaderStyles>

      <TransactionForm>
        <Input type="date" />

        <Dropdown
          label='Select bank account'
          options={DAccounts}
          onSelectToParent={() => { }}
        />

        <Dropdown
          label='Select type of transaction'
          options={DTransactionTypes}
          onSelectToParent={() => { }}
        />

        <Input type="number" placeholder='Amount' />

        <Dropdown
          label='Select categories'
          options={DCategories}
          onSelectToParent={() => { }}
        />

        <TextArea placeholder='Notes . . .' />
      </TransactionForm>

      <BaseFooterStyles>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton>Add</PrimaryButton>
      </BaseFooterStyles>
    </AddTransactionContainer>
  )
}

export default AddTransaction