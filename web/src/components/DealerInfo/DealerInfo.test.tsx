import { render } from '@redwoodjs/testing/web'

import DealerInfo from './DealerInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DealerInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DealerInfo />)
    }).not.toThrow()
  })
})
