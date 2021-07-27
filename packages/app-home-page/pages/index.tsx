import React from 'react'

import {
  H1,
  Loader,
  PageContainer,
  GridContainer,
} from '@lerna-demo/components-styled-atoms'
import { GridItemModel, ApiGridItemModel } from '@lerna-demo/utils-types'

import { GridItem } from '../components/GridItem/GridItem'
import { data } from './data'

interface GridPageProps {
  loading: boolean
  gridItems: GridItemModel[]
}

const HomePage = ({ loading, gridItems }: GridPageProps) => {
  return loading ? (
    <Loader>Loading Dishwashers</Loader>
  ) : (
    <PageContainer>
      <header>
        <H1 className="pt-5 pb-5">Dishwashers (114)</H1>
      </header>
      <main>
        <section>
          <GridContainer className="row">
            {gridItems.map((gridItem, index) => (
              <GridItem key={`gridItem-${index}`} gridItem={gridItem} />
            ))}
          </GridContainer>
        </section>
      </main>
    </PageContainer>
  )
}

const buildModel = (apiGridItem: ApiGridItemModel): GridItemModel => {
  const { productId, price, title, image } = apiGridItem

  const { now } = price

  return {
    productId,
    price: `£${now}`,
    title,
    image,
  }
}

export const getStaticProps = async () => {
  const products = data.products as ApiGridItemModel[]
  const firstTwoGridItems = products.slice(0, 2)
  const gridItems = firstTwoGridItems.map(buildModel)
  return { props: { loading: false, gridItems } }
}

export default HomePage
