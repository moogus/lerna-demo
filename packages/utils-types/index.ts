export type GridItemModel = {
  productId: string
  price: string
  title: string
  image: string
}

export type AdditionalServices = {
  includedServices: string[]
}

export type ProductModel = {
  title: string
  media: Images
  price: string
  productInformation: string
  displaySpecialOffer: string
  additionalServices: AdditionalServices
  code: string
}

type Price = {
  now?: string
}

export type ApiGridItemModel = {
  productId: string
  price: Price
  title: string
  image: string
}

export type Images = {
  altText: string
  urls: string[]
}

export type Media = {
  images: Images
}

type Details = {
  productInformation: string
}

export type ApiProductModel = {
  title: string
  media: Media
  price?: Price
  details?: Details
  displaySpecialOffer: string
  additionalServices: AdditionalServices
  code: string
}

export type ThunkConfig = {
  gridApi: string
  productApi: string
}
