export interface IDropdownProps {
  label: string;
  options: Array<IDDOption>;
  onSelectToParent: (option: IDDOption) => void
}

export interface IDDOption {
  id: number,
  name: string,
  imageURL: string,
}