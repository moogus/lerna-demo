import React from 'react'
import { useRouter } from 'next/router'

import {
  H1,
  Loader,
  PageContainer,
  NavigateBackButton,
} from '@lerna-demo/components-styled-atoms'
import { ApiProductModel, ProductModel } from '@lerna-demo/utils-types'

import { PortraitProductSection } from '../components/PortraitProductSection'
import { LandscapeProductSection } from '../components/LanscapeProductSection'
import { data } from '../data/data'

interface ProductPageProps {
  loading: boolean
  product: ProductModel
  productId: string
}

const Product = ({ product }: ProductPageProps) => {
  const router = useRouter()

  return product ? (
    <PageContainer>
      <header>
        <div className="d-flex justify-content-start">
          <NavigateBackButton onClick={() => router.back()}>
            &#8249;
          </NavigateBackButton>
          <H1 className="pt-4 pb-4">{product.title}</H1>
        </div>
      </header>
      <main>
        <section>
          <PortraitProductSection {...product} />
          <LandscapeProductSection {...product} />
        </section>
      </main>
    </PageContainer>
  ) : (
    <Loader>Loading Dishwashers</Loader>
  )
}

export const buildModel = (apiProduct: ApiProductModel): ProductModel => {
  const {
    title,
    media,
    price,
    details,
    displaySpecialOffer,
    additionalServices,
    code,
  } = apiProduct

  const { now } = price
  const { productInformation } = details
  const { images } = media
  const { altText, urls } = images

  return {
    title,
    media: { altText, urls },
    price: `£${now}`,
    productInformation,
    displaySpecialOffer,
    additionalServices,
    code,
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      '/product',
      { params: { productId: '1955287' } },
      { params: { productId: '5095447' } },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { productId } }) => {
  const product = buildModel(data)
  return { props: { loading: false, product, productId } }
}

export default Product
