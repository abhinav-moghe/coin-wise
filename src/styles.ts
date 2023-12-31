import { styled } from "styled-components";

export const TextSpan = styled.span`
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-txt);
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  padding-right: 0.50rem;
  padding-left: 0.50rem;

  background-color: var(--secondary-bg-color);
  border-radius: 0.25rem;
  border: 1px solid var(--color-default-border);

  cursor: pointer;

  &:hover {
    border-color: var(--color-default-hover);
  }

  &:active {
    background-color: hsla(212, 12%, 18%, 1);
    border-color: #6E7681;
  }
`

export const ButtonIcon = styled.img`
  width: 1rem;
  height: 1rem;
`

export const ViewContainer = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--primary-bg-color);
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--secondary-bg-color);
  border: 1px solid var(--color-default-border);
  border-radius: 0.25rem;
`

export const LeftContainer = styled(Container)`
  width: 25%;
`

export const TransactionContainer = styled(Container)`
  width: 75%;
`

export const ContainerHeader = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-default-border);
`

export const HeaderText = styled(TextSpan)`
  font-weight: 600;
`

export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - (1rem + 1.25rem + 1rem));
  padding-right: 1rem;
  padding-left: 1rem;
`