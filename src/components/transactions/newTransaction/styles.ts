import { styled } from "styled-components"
import { BaseButtonStyles } from "../../../styles"

// TO-DO: Move base styles to main file
export const BaseInputStyles = `
  width: 100%;
  padding: 0.50rem;

  line-height: 1.5rem;
  font-size: 0.875rem;
  color: var(--primary-txt);

  background-color: var(--primary-bg-color);
  border-radius: 0.375rem;
  border: 1px solid var(--color-default-border);
  transition: border-color 0.15s linear;

  &::placeholder {
    color: var(--secondary-txt);
  }

  &:hover {
    border-color: var(--color-default-hover);
  }

  &:focus {
    outline: none;
    background-color: var(--secondary-bg-color);
    border-color: var(--color-default-focus);
  }
`

export const BaseFooterStyles = styled.footer`
  padding: 1rem;
  
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`

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
  ${BaseButtonStyles};
  padding: 0.5rem;

  background-color: initial;
  border-radius: 0.375rem;
  transition: background-color 0.15s linear;

  &:hover {
    background-color: var(--color-gray);
  }
`

// TO-DO: Change it to form
export const TransactionForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1rem 0;
`

export const Input = styled.input`
  ${BaseInputStyles}
  min-height: 2.5rem;
`

export const TextArea = styled.textarea`
  ${BaseInputStyles};
  height: 100%;
`

const FooterButtonStyles = `
  ${BaseButtonStyles};
  width: 100%;
  height: 2rem;
  
  justify-content: center;

  border-radius: 0.375rem;
  transition: background-color 0.10s linear;

`

export const PrimaryButton = styled.button`
  ${FooterButtonStyles};
  color: var(--color-button-primary-text);
  background-color: var(--color-button-primary-background);
  border: 1px solid var(--color-button-primary-border);

  &:hover {
    background-color: var(--color-button-primary-hover-background);
  }

  &:active {
    background-color: var(--color-button-primary-background);
  }
`

export const SecondaryButton = styled.button`
  ${FooterButtonStyles};
  color: var(--color-button-secondary-text);
  background-color: var(--color-button-secondary-background);
  border: 1px solid var(--color-button-secondary-border);
  
  &:hover {
    background-color: var(--color-button-secondary-hover-background);
    border-color: var(--color-button-secondary-hover-border);
  }

  &:active {
    background-color: var(--color-button-secondary-background);
    border-color: var(--color-button-secondary-hover-border);
  }
`