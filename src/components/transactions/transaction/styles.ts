import styled from "styled-components"
import { BaseSpan } from "../../../base-styles"

export const TransactionContainer = styled.div`
  width: 100%;
  height: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;

  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  border-bottom: 1px solid var(--color-default-border);
`

export const CategoryIconCircle = styled.div`
  width: 2.75rem;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px dashed var(--primary-txt);
`

export const CategoryNameAndDate = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryName = styled.span`
  ${BaseSpan}
`

export const Date = styled.span`
  ${BaseSpan}
  font-weight: 400;
  font-size: 0.75rem;
`

export const Amount = styled.span`
  ${BaseSpan}
  margin-left: auto;
`
