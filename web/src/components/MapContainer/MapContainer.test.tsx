import { render } from '@redwoodjs/testing/web'

import MapContainer from './MapContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MapContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapContainer />)
    }).not.toThrow()
  })
})
