import { render } from '@redwoodjs/testing/web'

import EquipmentImages from './EquipmentImages'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EquipmentImages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EquipmentImages />)
    }).not.toThrow()
  })
})
