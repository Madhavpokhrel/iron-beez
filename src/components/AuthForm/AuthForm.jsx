import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Flex,
  Text,
  Button,
  FormLabel,
  Input,
  FormErrorMessage,
  Toast,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// import { navigate, routes } from "@redwoodjs/router";
// import { MetaTags } from "@redwoodjs/web";
// import { Toaster } from "@redwoodjs/web/toast";
// import { toast } from "@redwoodjs/web/toast";

// type LoginFormProps = {
//   backtosignin: () => void;
// };
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

  const handleChange = e => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };
  const SuccesfullyRegister = () => {
    toast.success('Register Succesfully!', { position: 'top-center' });
  };
  const FailedRegister = () => {
    toast.error('Register Unsuccesfully!', { position: 'top-center' });
  };

  const clear = () => {
    setSignupForm({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      zipCode: '',
      password: '',
    });
  };

  const registerSuccess = () => {
    toast.success('Registered Successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

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

        if (result.status == 201) {
          SuccesfullyRegister();
        }
      } catch (e) {
        console.log('error => ', e);
        if (e.status == 400) {
          FailedRegister();
        }
      }
    } else {
      console.log('signin data');
    }
  };

  // const { isAuthenticated, signUp } = useAuth();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate(routes.home());
  //   }
  // }, [isAuthenticated]);

  // // focus on email box on page load
  // const usernameRef = useRef<HTMLInputElement>();
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  // const onSubmit = async (data) => {
  //   const response = await signUp({ ...data });

  //   if (response.message) {
  //     toast(response.message);
  //   } else if (response.error) {
  //     toast.error(response.error);
  //   } else {
  //     // user is signed in automatically
  //     toast.success("Welcome!");
  //   }
  // };
  return (
    <>
      <Flex ml={5} mr={5}>
        <main className="rw-main">
          {/* <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} /> */}
          {/* <div className="rw-scaffold rw-login-container">
          <div className="rw-segment"> */}
          {/* <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header> */}

          <div className="rw-segment-main" style={{ background: '#FFFFFF' }}>
            <div className="rw-form-wrapper">
              <form onSubmit={handleSubmit}>
                <HStack spacing={6}>
                  <VStack alignItems={'start'}>
                    <FormLabel>First name</FormLabel>
                    <Input
                      style={{ width: '411px' }}
                      name="firstName"
                      className="rw-input"
                      placeholder="Enter Your FirstName"
                      onChange={handleChange}
                      // errorClassName="rw-input rw-input-error"
                      // ref={usernameRef}
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: "Please Enter the FirstName",
                      //   },
                      // }}
                    />
                    <FormErrorMessage />

                    <FormLabel>Phone number</FormLabel>
                    <Input
                      name="phoneNumber"
                      className="rw-input"
                      // errorClassName="rw-input rw-input-error"
                      placeholder="Enter Your PhoneNumber"
                      onChange={handleChange}
                      // ref={usernameRef}
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: "Please Enter the phoneNumber",
                      //   },
                      // }}
                    />
                    <FormErrorMessage />
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      className="rw-input"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      autoComplete="current-password"
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: "Password is required",
                      //   },
                      // }}
                    />
                    <FormErrorMessage />
                  </VStack>
                  <VStack alignItems={'start'}>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      style={{ width: '411px' }}
                      name="lastName"
                      className="rw-input"
                      // errorClassName="rw-input rw-input-error"
                      placeholder="Enter Your LastName"
                      onChange={handleChange}
                    />
                    <FormErrorMessage />
                    <FormLabel>Email</FormLabel>
                    <Input
                      style={{ width: '411px' }}
                      name="email"
                      className="rw-input"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                    />
                    <FormErrorMessage />
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      autoComplete="current-password"
                    />
                    <FormErrorMessage />
                  </VStack>
                </HStack>
                <Flex justifyContent={'center'}>
                  <VStack alignItems={'start'}>
                    <FormLabel>Zip code</FormLabel>
                    <Input
                      style={{ width: '411px' }}
                      name="zipCode"
                      className="rw-input"
                      placeholder="Enter Your ZipCode"
                      onChange={handleChange}
                      // errorClassName="rw-input rw-input-error"
                      // ref={usernameRef}
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: "Please Enter the Valid ZipCode",
                      //   },
                      // }}
                    />
                    <FormErrorMessage />
                  </VStack>
                </Flex>
                <VStack>
                  <Button
                    bg={'#4C956C'}
                    color={'white'}
                    onClick={SuccesfullyRegister}
                    mt={5}
                    width="60%"
                    type="submit"
                    // onClick={() => setIsSignup(true)}
                  >
                    <Text fontWeight={'bold'}>Sign Up</Text>
                  </Button>

                  <div
                    className="rw-login-link"
                    style={{ marginTop: '1.5rem' }}
                  >
                    <HStack>
                      <span>Already have an account?</span>
                      <Text
                        // to={routes.login()}
                        // onClick={backtosignin}
                        cursor="pointer"
                        className="rw-link"
                        style={{ color: '#D68C45', fontWeight: 'bold' }}
                      >
                        Signin
                      </Text>
                    </HStack>
                  </div>
                </VStack>
              </form>
            </div>
          </div>
          {/* </div> */}

          {/* </div> */}
        </main>
      </Flex>
      <ToastContainer />
    </>
  );
};

export default AuthForm;
