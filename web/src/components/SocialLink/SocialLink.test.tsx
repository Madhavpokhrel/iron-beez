import { render } from '@redwoodjs/testing/web'

import SocialLink from './SocialLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialLink />)
    }).not.toThrow()
  })
})
