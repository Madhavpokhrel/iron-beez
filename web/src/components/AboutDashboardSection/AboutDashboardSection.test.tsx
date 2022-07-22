import { render } from '@redwoodjs/testing/web'

import AboutDashboardSection from './AboutDashboardSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutDashboardSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutDashboardSection />)
    }).not.toThrow()
  })
})
