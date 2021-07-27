import React from "react";

import { PriceText, TextMarginContainer, RedText } from '@lerna-demo/components-styled-atoms'
import { AdditionalServices } from '@lerna-demo/utils-types'
interface ProductPriceProps {
  price: string
  additionalServices: AdditionalServices
};

export const ProductPrice = ({ price, additionalServices }: ProductPriceProps ) => {
  const { includedServices = [] } = additionalServices;
  
  return (
    <TextMarginContainer className="row">
      <div className="col">
        <PriceText>{price}</PriceText>
        <RedText>Claim an extra 3 years guarantee via redemption</RedText>
        {includedServices.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </TextMarginContainer>
  );
};
