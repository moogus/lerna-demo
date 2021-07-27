import React from 'react'

import { ProductImage } from '../ProductImage'
import { ProductDescription } from '../ProductDescription'
import { ProductPrice } from '../ProductPrice'

import { AdditionalServices, Images } from '@lerna-demo/utils-types'
import {
  H2,
  H3,
  TextMarginContainer,
  GridContainer,
  LanscapeGridInnerContainer,
} from '@lerna-demo/components-styled-atoms'

interface LandscapeProductSectionProps {
  code: string
  productInformation: string
  media: Images
  price: string
  additionalServices: AdditionalServices
}

export const LandscapeProductSection = ({
  code,
  productInformation,
  media,
  price,
  additionalServices,
}: LandscapeProductSectionProps) => {
  return (
    <div className="d-none d-lg-block -xl-block">
      <GridContainer>
        <LanscapeGridInnerContainer>
          <div className="row">
            <div className="col-8  pr-0">
              <ProductImage media={media} />
              <TextMarginContainer className="row">
                <div className="col">
                  <H2>Product Information</H2>
                </div>
              </TextMarginContainer>
              <TextMarginContainer className="row">
                <div className="col ">
                  <H3>{`Product code: ${code}`}</H3>
                </div>
              </TextMarginContainer>
              <TextMarginContainer className="row">
                <ProductDescription productInformation={productInformation} />
              </TextMarginContainer>
            </div>
            <div className="col-4 border-left">
              <ProductPrice
                price={price}
                additionalServices={additionalServices}
              />
            </div>
          </div>
        </LanscapeGridInnerContainer>
      </GridContainer>
    </div>
  )
}
