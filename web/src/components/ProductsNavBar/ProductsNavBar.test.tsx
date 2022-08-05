import { render } from '@redwoodjs/testing/web'

import ProductsNavBar from './ProductsNavBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductsNavBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsNavBar />)
    }).not.toThrow()
  })
})
