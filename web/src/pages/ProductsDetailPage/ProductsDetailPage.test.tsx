import { render } from '@redwoodjs/testing/web'

import ProductsDetailPage from './ProductsDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductsDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsDetailPage />)
    }).not.toThrow()
  })
})
