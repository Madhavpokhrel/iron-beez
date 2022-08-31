import React, { useRef, useState } from 'react';
import {
  HStack,
  VStack,
  Flex,
  Text,
  Button,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { setLoginTab } from '../../store/features/Tab/TabSlice';
import { useDispatch } from 'react-redux';
const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  zipCode: '',
  password: '',
};

const AuthForm = () => {
  const [signupForm, setSignupForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = e => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const SuccesfullyRegister = () => {
    toast.success('Register Succesfully!', { position: 'top-center' });
  };

  const FailedRegister = () => {
    toast.error(' Register Unsuccesfully', { position: 'top-center' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.target.reset();

    if (isSignup) {
      console.log('signupData =>', signupForm);

      try {
        const result = await axios.post(
          'http://localhost:5000/api/sign-up',

          JSON.stringify({
            firstName: signupForm.firstName,
            lastName: signupForm.lastName,
            phoneNumber: signupForm.phoneNumber,
            email: signupForm.email,
            password: signupForm.password,
            zipCode: signupForm.zipCode,
          }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );

        if (result.response.status == 201) {
          toast.success('Register Successfully!', { position: 'top-center' });
        }
      } catch (e) {
        console.log('error => ', e);

        FailedRegister();
      }
    } else {
      console.log('signin data');
    }
  };

  const labelStyle = {
    color: '#858585',
    fontWeight: '500',
  };

  return (
    <>
      <Flex ml={5} mr={5}>
        <main className="rw-main">
          <div className="rw-segment-main" style={{ background: '#FFFFFF' }}>
            <div className="rw-form-wrapper">
              <form onSubmit={handleSubmit}>
                <HStack spacing={6}>
                  <VStack alignItems={'start'}>
                    <FormLabel style={labelStyle} margin={0}>
                      First name
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      marginTop={0}
                      width={{ base: '100%', lg: '411px' }}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      name="firstName"
                      className="rw-input"
                      ref={firstRef}
                      placeholder="Enter Your FirstName"
                      onChange={handleChange}
                      required
                    />
                    <FormErrorMessage />

                    <FormLabel style={labelStyle} margin={0}>
                      Phone number
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      name="phoneNumber"
                      className="rw-input"
                      ref={lastRef}
                      placeholder="Enter Your PhoneNumber"
                      onChange={handleChange}
                      required
                    />
                    <FormErrorMessage />
                    <FormLabel style={labelStyle} margin={0}>
                      Password
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      name="password"
                      className="rw-input"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                    <FormErrorMessage />
                  </VStack>
                  <VStack alignItems={'start'}>
                    <FormLabel style={labelStyle} margin={0}>
                      Last name
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      width={{ base: '100%', lg: '411px' }}
                      name="lastName"
                      className="rw-input"
                      placeholder="Enter Your LastName"
                      onChange={handleChange}
                      required
                    />
                    <FormErrorMessage />
                    <FormLabel style={labelStyle} margin={0}>
                      Email
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      width={{ base: '100%', lg: '411px' }}
                      name="email"
                      className="rw-input"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                      required
                    />
                    <FormErrorMessage />
                    <FormLabel style={labelStyle} margin={0}>
                      Confirm Password
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      width={{ base: '100%', lg: '411px' }}
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      autoComplete="current-password"
                      required
                    />
                    <FormErrorMessage />
                  </VStack>
                </HStack>
                <Flex justifyContent={'center'}>
                  <VStack alignItems={'start'}>
                    <FormLabel style={labelStyle} margin={0}>
                      Zip code
                    </FormLabel>
                    <Input
                      borderRadius={0}
                      style={{ marginTop: '0', marginBottom: '7px' }}
                      width={{ base: '100%', lg: '411px' }}
                      name="zipCode"
                      className="rw-input"
                      placeholder="Enter Your ZipCode"
                      onChange={handleChange}
                      required
                    />
                    <FormErrorMessage />
                  </VStack>
                </Flex>
                <VStack>
                  <Button
                    bg={'#4C956C'}
                    color={'white'}
                    // onClick={{ SuccesfullyRegister, FailedRegister }}
                    mt={5}
                    width="60%"
                    type="submit"
                    style={{
                      height: '44px',
                    }}
                    onClick={() => setIsSignup(true)}
                    _hover={{ bgColor: '#4C956C' }}
                  >
                    <Text fontWeight={'700'}>Sign Up</Text>
                  </Button>

                  <div
                    className="rw-login-link"
                    style={{ marginTop: '1.5rem' }}
                  >
                    <HStack>
                      <span style={labelStyle}>Already have an account?</span>
                      <Text
                        cursor="pointer"
                        className="rw-link"
                        style={{ color: '#D68C45', fontWeight: 'bold' }}
                        onClick={() => dispatch(setLoginTab())}
                      >
                        Signin
                      </Text>
                    </HStack>
                  </div>
                </VStack>
              </form>
            </div>
          </div>
        </main>
      </Flex>
      <ToastContainer />
    </>
  );
};

export default AuthForm;
