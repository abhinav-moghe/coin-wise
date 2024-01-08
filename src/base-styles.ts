import styled, { css } from "styled-components"

export const BaseSpan = css`
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-txt);
`

export const BaseInput = css`
  width: 100%;
  padding: 0.5rem;

  line-height: 1.5rem;
  font-size: 0.875rem;
  color: var(--primary-txt);
  background-color: var(--primary-bg-color);
  border-radius: 0.375rem;
  border: 1px solid var(--color-default-border);
  transition: border-color 0.15s linear;

  &::placeholder {
    color: var(--secondary-txt);
  }

  &:hover {
    border-color: var(--color-default-hover);
  }

  &:focus {
    outline: none;
    background-color: var(--secondary-bg-color);
    border-color: var(--color-default-focus);
  }
`

export const BaseUnorderedList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const BaseLink = css`
  width: 100%;
  height: 2.5rem;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    transition: background-color 0.15s ease-out;
  }
`

export const BaseButton = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  cursor: pointer;
  transition: border-color 0.15s linear;
`

export const PrimaryButton = styled.button<{ width: string; height: string }>`
  ${BaseButton}
  width: 100%;
  height: 2rem;
  color: var(--color-button-primary-text);
  background-color: var(--color-button-primary-background);
  border: 1px solid var(--color-button-primary-border);

  &:hover {
    background-color: var(--color-button-primary-hover-background);
  }

  &:active {
    background-color: var(--color-button-primary-background);
  }
`

export const SecondaryButton = styled.button<{ width?: string; height?: string }>`
  ${BaseButton}
  width: 100%;
  height: 2rem;
  color: var(--color-button-secondary-text);
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

export const Image = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width ?? ""};
  height: ${({ height }) => height ?? ""};
`
