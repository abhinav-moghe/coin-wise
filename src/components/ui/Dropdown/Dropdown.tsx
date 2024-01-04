import { MutableRefObject, useRef, useState } from 'react'
import useClickOutside from '../../../hooks.ts/click-outside'
import { DropdownButton, DropdownButtonContent, DropdownLabel, DropdownOption, DropdownOptionContent, DropdownOptionLabel, DropdownOptionsWrapper, DropdownSelectedText } from './styles'
import { IDDOption, IDropdownProps } from './types'
import { BaseImageStyles } from '../../../styles'

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
      <DropdownButton onClick={() => setOpen(!open)}>
        {
          !selectedOption ?
            <DropdownLabel>{label}</DropdownLabel>
            :
            <DropdownButtonContent>
              <BaseImageStyles {...{ width: '24px', height: '24px' }} src={`src/assets/images/${selectedOption.imageURL}`} />
              <DropdownSelectedText>{selectedOption.name}</DropdownSelectedText>
            </DropdownButtonContent>
        }
        <BaseImageStyles {...{ width: '20px', height: '20px' }} src={`src/assets/icons/chevron-down.png`} />
      </DropdownButton>

      {
        open &&
        <DropdownOptionsWrapper>
          {
            options.map(o =>
              <DropdownOption key={o.id} onClick={() => onSelect(o)}>
                <DropdownOptionContent>
                  <BaseImageStyles {...{ width: '24px', height: '24px' }} src={`src/assets/images/${o.imageURL}`} />
                  <DropdownOptionLabel>{o.name}</DropdownOptionLabel>
                </DropdownOptionContent>
              </DropdownOption>)
          }
        </DropdownOptionsWrapper>
      }
    </div>
  )
}

export default Dropdown
