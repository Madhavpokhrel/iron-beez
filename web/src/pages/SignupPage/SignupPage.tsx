import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import AuthForm from 'src/components/AuthForm/AuthForm'

const SignupPage = () => {
  return (
    <>
      {/* <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} /> */}
      <AuthForm />
      {/* </main> */}
    </>
  )
}

export default SignupPage
