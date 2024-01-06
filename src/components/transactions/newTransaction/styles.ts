import { styled } from "styled-components"
import { BaseButton, BaseInput, PrimaryButton, SecondaryButton } from "../../../base-styles"

export const AddTransactionContainer = styled.div`
  width: 25%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--secondary-bg-color);

  border-radius: 0.75rem;
  box-shadow: var(--color-overlay-shadow);
`

export const CloseButton = styled.button`
  ${BaseButton}
  padding: 0.5rem;

  background-color: initial;

  &:hover {
    background-color: var(--color-gray);
  }
`

// TO-DO: Change it to form
export const TransactionForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  ${BaseInput}
  min-height: 2.5rem;
`

export const TextArea = styled.textarea`
  ${BaseInput}
  height: 100%;
`

export const Footer = styled.footer`
  padding: 1rem;

  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`

export const CancelButton = styled(SecondaryButton)``

export const AddButton = styled(PrimaryButton)``
