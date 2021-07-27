import React from "react";

interface ProductDescriptionProps {
  productInformation: string
};

export const ProductDescription = ({ productInformation }: ProductDescriptionProps ) => {
  const createMarkup = () => ({ __html: productInformation });

  return (
    <div className="col">
      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
