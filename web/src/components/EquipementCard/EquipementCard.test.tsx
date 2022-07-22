import { render } from '@redwoodjs/testing/web'

import EquipementCard from './EquipementCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EquipementCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EquipementCard />)
    }).not.toThrow()
  })
})
