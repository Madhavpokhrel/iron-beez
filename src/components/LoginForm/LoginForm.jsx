import React, { useState, useRef } from 'react';
import {
  Text,
  Box,
  Button,
  FormLabel,
  Input,
  Link,
  FormErrorMessage,
  Flex,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginUser } from '../../store/features/User/userSigninSlice';
import { useDispatch, useSelector } from 'react-redux';
const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [signinForm, setSigninForm] = useState(initialState);

  const dispatch = useDispatch();
  const handleChange = e => {
    setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
  };

  const SuccesfullyRegister = () => {
    toast.success('Register Succesfully!', { position: 'top-center' });
  };
  const FailedRegister = () => {
    toast.error(' Register Unsuccesfully', { position: 'top-center' });
  };

  const state = useSelector(state => state.userSignin);
  console.log(state);
  const { loading, userSignin, error } = state;

  const handleSubmit = async e => {
    e.preventDefault();
    e.target.reset();

    dispatch(loginUser({ signinForm }));

    if (!error) {
      SuccesfullyRegister();
    }
    if (error) {
      FailedRegister();
    }
  };

  return (
    <Flex height={'50vh'} m={(6, 6, 6, 6)}>
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <FormLabel
                style={{
                  color: '#858585',
                  fontWeight: '500',
                }}
              >
                Email
              </FormLabel>
              <Input
                borderRadius={0}
                width={'100%'}
                name="email"
                className="rw-input"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />

              <FormErrorMessage className="rw-field-error" />

              <FormLabel
                style={{
                  color: '#858585',
                  fontWeight: '500',
                  paddingTop: '1rem',
                }}
              >
                Password
              </FormLabel>
              <Input
                borderRadius={0}
                width={{ base: '100%', md: '500px' }}
                name="password"
                className="rw-input"
                placeholder="Enter your Password"
                autoComplete="current-password"
                onChange={handleChange}
              />

              <FormErrorMessage />
              <Box mt={3} fontWeight={'bold'}>
                <Link
                  style={{
                    color: '#858585',
                    fontWeight: '500',
                    paddingTop: '1rem',
                  }}
                >
                  Forgot Your Password?
                </Link>
              </Box>

              <Button
                bg={'#4C956C'}
                color={'white'}
                mt={5}
                type="submit"
                width={{ base: '100%', md: '500px' }}
                style={{
                  height: '44px',
                }}
                _hover={{ bgColor: '#4C956C' }}
                // onClick={() => setIsSignin(true)}
              >
                <Text fontWeight={'700'}>Sign in</Text>
              </Button>
            </form>
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
          width={{ base: '100%', md: '500px' }}
          style={{
            height: '44px',
          }}
          _hover={{ bgColor: '#D68C45' }}
          // onClick={onContinueWithEmail}
        >
          <Text color={'white'} fontWeight={'700'}>
            Continue with Email
          </Text>
        </Button>
      </div>
    </Flex>
  );
};

export default LoginForm;
