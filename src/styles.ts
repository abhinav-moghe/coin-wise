import { styled } from "styled-components";

export const BaseSpanStyles = `
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-txt);
`

export const BaseButtonStyles = `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  cursor: pointer;
  transition: border-color 0.15s linear;
  border-radius: 0.375rem;
`

export const BaseImageStyles = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const BaseHeaderStyles = styled.header`
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BaseHeaderText = styled.span`
  ${BaseSpanStyles};
  font-weight: 600;
`

export const BaseHeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Button = styled.button`
  ${BaseButtonStyles};

  padding: 0.125rem 0.50rem;
  
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

export const ViewContainer = styled.main`
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
  border-radius: 0.375rem;
`

export const LeftContainer = styled(Container)`
  width: 25%;
`

export const TransactionContainer = styled(Container)`
  width: 75%;
`

export const ContainerHeader = styled(BaseHeaderStyles)`
  border-bottom: 1px solid var(--color-default-border);
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - (1rem + 1.25rem + 1rem));
  padding: 0 1rem;
`

export const ButtonText = styled.span`
  ${BaseSpanStyles};
  color: var(--color-button-secondary-text);
`