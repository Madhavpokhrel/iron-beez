import { render } from '@redwoodjs/testing/web'

import About from './About'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('About', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<About />)
    }).not.toThrow()
  })
})
