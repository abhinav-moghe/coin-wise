import styled from "styled-components"
import { BaseButtonStyles, BaseSpanStyles } from "../../../styles"

export const DropdownButton = styled.button`
  ${BaseButtonStyles};
  width: 100%;
  height: 2.5rem;
  padding-right: 0 0.5rem 0;

  color: var(--secondary-txt);
  background-color: var(--primary-bg-color);
  border-radius: 0.375rem;
  border: 1px solid var(--color-default-border);

  &:hover {
    border-color: var(--color-default-hover);
  }

  &:focus {
    background-color: var(--secondary-bg-color);
    border-color: var(--color-default-focus);
  }
`

export const DropdownLabel = styled.span`
  ${BaseSpanStyles};
  font-weight: 400;
  color: var(--secondary-txt);
`

export const DropdownButtonContent = styled.a`
  width: 100%;
  padding: 0.375rem 0.50rem;
  
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const DropdownSelectedText = styled.span`
  ${BaseSpanStyles};
  font-weight: 400;
  color: var(--primary-txt);
`

export const DropdownOptionsWrapper = styled.ul`
  /* width of the wrapper - left/right padding  */
  width: calc(25% - (1rem + 1rem));
  margin-top: 0.5rem;
  padding: 0.5rem;

  position: absolute;
  
  background-color: var(--drop-down-bg-color);  
  border-radius: 0.375rem;
  list-style: none;
  z-index: 10;
`

export const DropdownOption = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 0.375rem;
`

export const DropdownOptionContent = styled.a`
  width: 100%;
  height: 2.5rem;
  padding: 0.375rem 0.50rem;

  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.25rem;
  border-style: none;

  &:hover {
    background-color: #B1BAC41F;
  }
`

export const DropdownOptionLabel = styled.span`
  ${BaseSpanStyles};
  font-weight: 400;
`