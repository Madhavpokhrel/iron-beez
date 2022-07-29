import { render } from '@redwoodjs/testing/web'

import Enquiry from './Enquiry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Enquiry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Enquiry />)
    }).not.toThrow()
  })
})
