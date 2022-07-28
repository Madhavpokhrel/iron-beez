import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductsDetailPage = () => {
  return (
    <>
      <MetaTags title="ProductsDetail" description="ProductsDetail page" />

      <h1>ProductsDetailPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProductsDetailPage/ProductsDetailPage.tsx</code>
      </p>
      <p>
        My default route is named <code>productsDetail</code>, link to me with `
        <Link to={routes.productsDetail()}>ProductsDetail</Link>`
      </p>
    </>
  )
}

export default ProductsDetailPage
