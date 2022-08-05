import { render } from '@redwoodjs/testing/web'

import ProductsListingPage from './ProductsListingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductsListingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsListingPage />)
    }).not.toThrow()
  })
})
