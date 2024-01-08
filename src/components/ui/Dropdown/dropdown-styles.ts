import styled, { css } from "styled-components"
import { BaseButton, BaseLink, BaseSpan, BaseUnorderedList } from "../../../base-styles"

export const DropdownButton = styled.button<{ width: string; height: string }>`
  ${BaseButton}
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem 0;

  justify-content: space-between;

  color: var(--secondary-txt);
  background-color: var(--primary-bg-color);
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
  ${BaseSpan}
  font-weight: 400;
  color: var(--secondary-txt);
`

export const DropdownButtonContent = styled.a`
  width: 100%;
  padding: 0.375rem 0.5rem;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const DropdownSelectedText = styled.span`
  ${BaseSpan}
  font-weight: 400;
`

export const DropdownOptionsWrapper = styled.ul`
  ${BaseUnorderedList}
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
  ${BaseLink}
  padding: 0.375rem 0.5rem;
  gap: 0.5rem;

  &:hover {
    background-color: #b1bac41f;
  }
`

export const DropdownOptionLabel = styled.span`
  ${BaseSpan}
  font-weight: 400;
`
