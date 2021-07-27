import React from "react"

import { ProductImage } from "../ProductImage"
import { ProductDescription } from "../ProductDescription"
import { ProductPrice } from "../ProductPrice"

import { AdditionalServices, Images } from '@lerna-demo/utils-types'
import {
  H2,
  H3,
  TextMarginContainer,
  GridContainer,
  LineSpacer,
  PortraitGridInnerContainer,
} from '@lerna-demo/components-styled-atoms'

interface PortraitProductSectionProps {
  code: string
  productInformation: string
  media: Images
  price: string
  additionalServices: AdditionalServices
};

export const PortraitProductSection = ({ 
  code,
  productInformation,
  media,
  price,
  additionalServices
 }: PortraitProductSectionProps) => {

  return (
    <div className="d-none d-sm-block d-md-block d-lg-none">
      <GridContainer className="row">
        <PortraitGridInnerContainer className="col">
          <ProductImage media={media}/>
          <LineSpacer className="row pt1 pb1 border-top border-bottom" />
          <ProductPrice 
            price={price} 
            additionalServices={additionalServices}/>
          <TextMarginContainer className="row">
            <div className="col">
              <H2>Product Information</H2>
            </div>
          </TextMarginContainer>
          <TextMarginContainer className="row">
            <div className="col">
              <H3>{`Product code: ${code}`}</H3>
            </div>
          </TextMarginContainer>
          <TextMarginContainer className="row">
            <ProductDescription productInformation={productInformation}/>
          </TextMarginContainer>
        </PortraitGridInnerContainer>
      </GridContainer>
    </div>
  );
};
