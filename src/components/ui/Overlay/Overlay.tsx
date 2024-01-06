import { OverlayBackdrop } from "./overlay-styles"

const Overlay = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <OverlayBackdrop>{children}</OverlayBackdrop>
}

export default Overlay
