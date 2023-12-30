import { styled } from "styled-components";

export const ViewContainer = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--primary-bg-color);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--secondary-bg-color);
  border: 1px solid var(--color-default-border);
  border-radius: 0.25rem;
`;

export const LeftContainer = styled(Container)`
  width: 25%;
`;

export const TransactionContainer = styled(Container)`
  width: 75%;
`;

export const ContainerHeader = styled.header`
  padding: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--primary-txt);
  border-bottom: 1px solid var(--color-default-border);
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - (1rem + 1.25rem + 1rem));
  padding-right: 1rem;
  padding-left: 1rem;
`;