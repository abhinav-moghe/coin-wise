import { MutableRefObject, useRef, useState } from "react"
import { IDDOption, IDropdownProps } from "./types"
import {
  DropdownButton,
  DropdownButtonContent,
  DropdownLabel,
  DropdownOption,
  DropdownOptionContent,
  DropdownOptionLabel,
  DropdownOptionsWrapper,
  DropdownSelectedText,
} from "./styles"
import { Image } from "../../../base-styles"
import useClickOutside from "../../../hooks.ts/click-outside"

const Dropdown = ({ label, options, onSelectToParent }: IDropdownProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<IDDOption | null>(null)

  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

  useClickOutside(open, wrapperRef, () => setOpen(false))

  const onSelect = (option: IDDOption): void => {
    setSelectedOption(option)
    setOpen(false)
    // communicate with parent component
    onSelectToParent(option)
  }

  return (
    <div ref={wrapperRef}>
      <DropdownButton
        width="100%"
        height="2.5rem"
        onClick={() => setOpen(!open)}
      >
        {!selectedOption ? (
          <DropdownLabel>{label}</DropdownLabel>
        ) : (
          <DropdownButtonContent>
            <Image
              {...{ width: "24px", height: "24px" }}
              src={`src/assets/images/${selectedOption.imageURL}`}
            />
            <DropdownSelectedText>{selectedOption.name}</DropdownSelectedText>
          </DropdownButtonContent>
        )}
        <Image
          {...{ width: "20px", height: "20px" }}
          src={`src/assets/icons/chevron-down.png`}
        />
      </DropdownButton>

      {open && (
        <DropdownOptionsWrapper>
          {options.map((o) => (
            <DropdownOption
              key={o.id}
              onClick={() => onSelect(o)}
            >
              <DropdownOptionContent>
                <Image
                  {...{ width: "24px", height: "24px" }}
                  src={`src/assets/images/${o.imageURL}`}
                />
                <DropdownOptionLabel>{o.name}</DropdownOptionLabel>
              </DropdownOptionContent>
            </DropdownOption>
          ))}
        </DropdownOptionsWrapper>
      )}
    </div>
  )
}

export default Dropdown
