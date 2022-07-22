import { useRef } from 'react'
import { useEffect, useState } from 'react'

import { Text, Box, Button } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

type LoginFormProps = {
  onContinueWithEmail: () => void
}

const LoginForm = ({ onContinueWithEmail }: LoginFormProps) => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <div>
      <div>
        <div className="rw-form-wrapper">
          <Form onSubmit={onSubmit} className="rw-form-wrapper">
            <Label
              name="username"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Email
            </Label>
            <TextField
              style={{ width: '500px' }}
              name="username"
              className="rw-input"
              placeholder="Enter Your Email"
              errorClassName="rw-input rw-input-error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'invalid email address',
                },
              }}
            />

            <FieldError name="username" className="rw-field-error" />

            <Label
              name="password"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Password
            </Label>
            <PasswordField
              style={{ width: '500px' }}
              name="password"
              className="rw-input"
              placeholder="Enter your Password"
              errorClassName="rw-input rw-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Enter a valid password to sign in',
                },
              }}
            />

            <FieldError name="password" className="rw-field-error" />
            <Box mt={3} fontWeight={'bold'}>
              <Link to={routes.forgotPassword()} className="rw-forgot-link">
                Forgot Your Password?
              </Link>
            </Box>

            <Button bg={'#4C956C'} color={'white'} mt={5} width="100%">
              <Submit className=" rw-button-blue">
                <Text fontWeight={'bold'}>Sign in</Text>
              </Submit>
            </Button>
          </Form>
          <Box textAlign={'center'} mt={3}>
            <Text fontWeight={'bold'}>or</Text>
          </Box>
        </div>
      </div>
      {/* <div className="rw-login-link">
        <span>Don&apos;t have an account?</span>{' '}
        <Link to={routes.signup()} className="rw-link">
          Sign up!
        </Link>
      </div> */}
      <Button
        bg={'#D68C45'}
        color={'white'}
        mt={5}
        width="100%"
        onClick={onContinueWithEmail}
      >
        <Text color={'white'} fontWeight={'bold'}>
          Continue with Email
        </Text>
      </Button>
    </div>
  )
}

export default LoginForm
