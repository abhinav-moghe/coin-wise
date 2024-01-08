import { Tab, TabContent, TabList, TabName } from "./tabs-styles"
import { ITabsProps } from "./tabs-types"

const Tabs = ({ tabs, setTabs }: ITabsProps): JSX.Element => {
  const handleClick = (index: number): void => {
    setTabs((pv: Array<ITab>) => {
      return pv.map((ele: ITab, idx: number) => {
        if (idx === index) {
          ele.isSelected = true
        } else {
          ele.isSelected = false
        }
        return ele
      })
    })
  }

  return (
    <TabList>
      {tabs?.length > 0 &&
        tabs.map((ele: ITab, idx: number) => (
          <Tab
            key={ele.id}
            selected={ele.isSelected}
            onClick={() => handleClick(idx)}
          >
            <TabContent>
              <TabName>{ele.name}</TabName>
            </TabContent>
          </Tab>
        ))}
    </TabList>
  )
}

export default Tabs
