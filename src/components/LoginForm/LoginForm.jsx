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

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [signinForm, setSigninForm] = useState(initialState);
  const [isSignin, setIsSignin] = useState(true);

  const handleChange = e => {
    setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
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

    try {
      const result = await axios.post(
        'http://localhost:5000/api/sign-in',

        JSON.stringify({
          email: signinForm.email,
          password: signinForm.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (result.response.status == 201) {
        SuccesfullyRegister();
      }
    } catch (e) {
      console.log('error => ', e);

      FailedRegister();
    }
  };

  return (
    <Flex height={'60vh'} m={(6, 6, 6, 6)}>
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <FormLabel>Email</FormLabel>
              <Input
                style={{ width: '500px' }}
                name="username"
                className="rw-input"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />

              <FormErrorMessage className="rw-field-error" />

              <FormLabel>Password</FormLabel>
              <Input
                style={{ width: '500px' }}
                name="password"
                className="rw-input"
                placeholder="Enter your Password"
                autoComplete="current-password"
                onChange={handleChange}
              />

              <FormErrorMessage />
              <Box mt={3} fontWeight={'bold'}>
                <Link>Forgot Your Password?</Link>
              </Box>

              <Button
                bg={'#4C956C'}
                color={'white'}
                mt={5}
                width="100%"
                type="submit"
                // onClick={() => setIsSignin(true)}
              >
                <Text fontWeight={'bold'}>Sign in</Text>
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
          width="100%"
          // onClick={onContinueWithEmail}
        >
          <Text color={'white'} fontWeight={'bold'}>
            Continue with Email
          </Text>
        </Button>
      </div>
    </Flex>
  );
};

export default LoginForm;
