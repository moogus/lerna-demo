import React from 'react'
import { useRouter } from 'next/router'

import { GridItemModel } from '@lerna-demo/utils-types'

export interface GridItemProps {
  gridItem: GridItemModel
}

import {
  GridContainer,
  GridInnerContainer,
  ImageRow,
  ImageColumn,
  FluidImage,
  DescriptionTextArea,
  DescriptionText,
  PriceTextArea,
  BasicPriceText,
} from '@lerna-demo/components-styled-atoms'

export const GridItem = ({ gridItem }: GridItemProps) => {
  const router = useRouter()

  const { productId, price, title, image } = gridItem

  return (
    <GridContainer
      data-testid="clickable-grid-item"
      className="col-md-3"
      onClick={() => router.push(`product/${productId}`)}
    >
      <GridInnerContainer>
        <ImageRow className="row">
          <ImageColumn className="col">
            <FluidImage src={image} alt={title} />
          </ImageColumn>
        </ImageRow>
        <DescriptionTextArea>
          <DescriptionText>{title}</DescriptionText>
        </DescriptionTextArea>
        <PriceTextArea>
          <BasicPriceText>{price}</BasicPriceText>
        </PriceTextArea>
      </GridInnerContainer>
    </GridContainer>
  )
}
