import styled from "styled-components"

export const OverlayBackdrop = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--color-neutral-muted);
  z-index: 100;
`
