import styled from "styled-components"
import { BaseSpan, SecondaryButton } from "./base-styles"

export const Header = styled.header`
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderText = styled.h1`
  ${BaseSpan}
  margin: 0;
  font-weight: 600;
`

export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Button = styled(SecondaryButton)`
  padding: 0.125rem 0.5rem;
`

export const ViewContainer = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;

  background-color: var(--primary-bg-color);
`

// TO-DO: Move container to base-styles
const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--secondary-bg-color);
  border: 1px solid var(--color-default-border);
  border-radius: 0.375rem;
`

export const LeftContainer = styled(Container)`
  width: 25%;
  display: flex;
  flex-direction: column;
`

export const TransactionContainer = styled(Container)`
  width: 75%;
  display: flex;
  flex-direction: column;
`

export const ContainerHeader = styled(Header)`
  border-bottom: 1px solid var(--color-default-border);
`

export const ButtonText = styled.span`
  ${BaseSpan}
  color: var(--color-button-secondary-text);
`
