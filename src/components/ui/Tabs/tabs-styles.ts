import styled, { css } from "styled-components"
import { BaseLink, BaseSpan, BaseUnorderedList } from "../../../base-styles"

// TO-DO: Check if ul from drop-down can be re-used here
export const TabList = styled.ul`
  ${BaseUnorderedList}
  height: 4rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border-bottom: 1px solid var(--color-default-border);
`

export const Tab = styled.li<{ selected: boolean }>`
  height: 4rem;
  width: 100%;
  display: inline-flex;
  border-bottom: ${({ selected }) => (selected ? "2px solid #f78166" : 0)};
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`

// TO-DO: Check if a from drop-down can be re-used here
export const TabContent = styled.a`
  ${BaseLink}
  padding: 0 1rem;
  text-align: center;

  &:hover {
    background-color: #b1baba1f;
  }
`

export const TabName = styled.span`
  ${BaseSpan}
  width: 100%;
`
