import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginFormPage = () => {
  return (
    <>
      <MetaTags title="LoginForm" description="LoginForm page" />

      <h1>LoginFormPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginFormPage/LoginFormPage.tsx</code>
      </p>
      <p>
        My default route is named <code>loginForm</code>, link to me with `
        <Link to={routes.loginForm()}>LoginForm</Link>`
      </p>
    </>
  )
}

export default LoginFormPage
