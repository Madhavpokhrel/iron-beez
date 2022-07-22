import { render } from '@redwoodjs/testing/web'

import LoginFormPage from './LoginFormPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginFormPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginFormPage />)
    }).not.toThrow()
  })
})
