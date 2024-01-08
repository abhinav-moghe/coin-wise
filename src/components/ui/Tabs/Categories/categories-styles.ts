import styled from "styled-components"
import { BaseSpan } from "../../../../base-styles"

// TO-DO: Properties are taken from transaction-list, see how to modularate
export const ListContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`

// TO-DO: Properties are taken from transaction, see how to modularate
export const CategoryContainer = styled.div`
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

  &:hover {
    border-bottom: 1px solid var(--color-default-hover);
    transition: border-bottom 0.1s linear;
  }
`

// TO-DO: Properties are taken from transaction, see how to modularate
export const IconContainer = styled.div`
  width: 2.75rem;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px dashed var(--primary-txt);
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex-grow: 1;
`

export const NameAndAmount = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.span`
  ${BaseSpan}
`

export const Amount = styled.span`
  ${BaseSpan}
  font-weight: 500;
  font-size: 0.75rem;
`

export const Status = styled.progress`
  width: 100%;
  height: 4px;
  background: #666666;
  border: none;
  border-radius: 0.375em;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-webkit-progress-bar {
    border-radius: 0.375em;
    background: #666666;
  }

  &::-webkit-progress-value {
    border-radius: 0.375em;
    background: #f78166;
  }

  &::-moz-progress-bar {
    border-radius: 0.375em;
    background: #f78166;
  }
`
