import { render } from '@redwoodjs/testing/web'

import IronBeezLayout from './IronBeezLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IronBeezLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IronBeezLayout />)
    }).not.toThrow()
  })
})
