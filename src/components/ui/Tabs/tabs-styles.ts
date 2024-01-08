import styled, { css } from "styled-components"
import { BaseSpan } from "../../../base-styles"

// TO-DO: Check if ul from drop-down can be re-used here
const BaseUl = css`
  margin: 0;
  padding: 0;
`

export const TabList = styled.ul`
  ${BaseUl}
  height: 4rem;

  border-bottom: 1px solid var(--color-default-border);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  list-style: none;
`

export const Tab = styled.li<{ selected: boolean }>`
  height: 4rem;
  width: 100%;
  display: inline-flex;
  border-bottom: ${({ selected }) => (selected ? "2px solid #f78166" : 0)};
  align-items: center;
`

// TO-DO: Check if a from drop-down can be re-used here
export const TabContent = styled.a`
  height: 2.5rem;
  width: 100%;
  padding: 0 1rem;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  line-height: 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: var(--primary-txt);

  background-color: initial;
  border-radius: 0.375rem;

  cursor: pointer;
  text-decoration: none;
`

export const TabName = styled.span`
  ${BaseSpan}
  width: 100%;
`
