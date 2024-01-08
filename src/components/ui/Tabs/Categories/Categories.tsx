import { useState } from "react"
import { DCategories } from "../../../../constants"
import { Image } from "../../../../base-styles"
import {
  Amount,
  CategoryContainer,
  Details,
  IconContainer,
  ListContainer,
  Name,
  NameAndAmount,
  Status,
} from "./categories-styles"

const Categories = (): JSX.Element => {
  const [categories] = useState<Array<ICategory>>(DCategories)

  const formatAmount = (value: number): string => {
    return value.toLocaleString()
  }

  return (
    <ListContainer>
      {categories.map((c: ICategory) => (
        <CategoryContainer key={c.id}>
          <IconContainer>
            <Image
              width="1.5rem"
              height="1.5rem"
              src={`src/assets/images/${c?.imageURL}`}
            />
          </IconContainer>
          <Details>
            <NameAndAmount>
              <Name>{c.name}</Name>
              <Amount>{`${formatAmount(c.spentAmount)} / ${formatAmount(c.limitAmount)}`}</Amount>
            </NameAndAmount>

            <Status
              value={c.spentAmount}
              max={c.limitAmount}
            />
          </Details>
        </CategoryContainer>
      ))}
    </ListContainer>
  )
}

export default Categories
