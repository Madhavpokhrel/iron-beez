import { useRef } from 'react'
import { useEffect } from 'react'

import { HStack, VStack, Flex, Text, Button } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { toast } from '@redwoodjs/web/toast'

type LoginFormProps = {
  backtosignin: () => void
}
const AuthForm = ({ backtosignin }: LoginFormProps) => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }
  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        {/* <div className="rw-scaffold rw-login-container">
          <div className="rw-segment"> */}
        {/* <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header> */}

        <div className="rw-segment-main" style={{ background: '#FFFFFF' }}>
          <div className="rw-form-wrapper">
            <Form onSubmit={onSubmit} className="rw-form-wrapper">
              <HStack spacing={6}>
                <VStack alignItems={'start'}>
                  <Label
                    name="firstName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    First name
                  </Label>
                  <TextField
                    style={{ width: '411px' }}
                    name="firstName"
                    className="rw-input"
                    placeholder="Enter Your FirstName"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Please Enter the FirstName',
                      },
                    }}
                  />
                  <FieldError name="firstName" className="rw-field-error" />

                  <Label
                    name="phoneNumber"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Phone number
                  </Label>
                  <TextField
                    name="phoneNumber"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    placeholder="Enter Your PhoneNumber"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Please Enter the phoneNumber',
                      },
                    }}
                  />
                  <FieldError name="phoneNumber" className="rw-field-error" />
                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    placeholder="Enter Your Password"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />
                </VStack>
                <VStack alignItems={'start'}>
                  <Label
                    name="lastName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Last name
                  </Label>
                  <TextField
                    style={{ width: '411px' }}
                    name="lastName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    placeholder="Enter Your LastName"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Please Enter the lastName',
                      },
                    }}
                  />
                  <FieldError name="lastName" className="rw-field-error" />
                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    style={{ width: '411px' }}
                    name="email"
                    className="rw-input"
                    placeholder="Enter Your Email"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'email is requried',
                      },
                    }}
                  />
                  <FieldError name="email" className="rw-field-error" />
                  <Label
                    name="confirmPassword"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Confirm Password
                  </Label>
                  <PasswordField
                    name="confirmPassword"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    placeholder="Confirm Your Password"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Please confirm password',
                      },
                    }}
                  />
                  <FieldError
                    name="confirmPassword"
                    className="rw-field-error"
                  />
                </VStack>
              </HStack>
              <Flex justifyContent={'center'}>
                <VStack alignItems={'start'}>
                  <Label
                    name="zipCode"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Zip code
                  </Label>
                  <TextField
                    style={{ width: '411px' }}
                    name="zipCode"
                    className="rw-input"
                    placeholder="Enter Your ZipCode"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Please Enter the Valid ZipCode',
                      },
                    }}
                  />
                  <FieldError name="zipCode" className="rw-field-error" />
                </VStack>
              </Flex>
              <VStack>
                <Button bg={'#4C956C'} color={'white'} mt={5} width="60%">
                  <Submit>
                    <Text fontWeight={'bold'}>Sign Up</Text>
                  </Submit>
                </Button>

                <div className="rw-login-link" style={{ marginTop: '1.5rem' }}>
                  <HStack>
                    <span>Already have an account?</span>
                    <Text
                      // to={routes.login()}
                      onClick={backtosignin}
                      cursor="pointer"
                      className="rw-link"
                      style={{ color: '#D68C45', fontWeight: 'bold' }}
                    >
                      Signin
                    </Text>
                  </HStack>
                </div>
              </VStack>
            </Form>
          </div>
        </div>
        {/* </div> */}

        {/* </div> */}
      </main>
    </>
  )
}

export default AuthForm
