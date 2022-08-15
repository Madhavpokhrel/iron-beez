import React from 'react';
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

// import { Link, Navigate, Routes } from "react-router-dom";
// import { toast } from "react-toastify";

// type LoginFormProps = {
//   onContinueWithEmail: () => void;
// };

const LoginForm = () => {
  // const { isAuthenticated, logIn } = useAuth();

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       // Navigate(Routes.Home());
  //     }
  //   }, [isAuthenticated]);

  // const usernameRef = useRef<HTMLInputElement>();
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  // const onSubmit = async (data) => {
  //   const response = await logIn({ ...data });

  //   if (response.message) {
  //     toast(response.message);
  //   } else if (response.error) {
  //     toast.error(response.error);
  //   } else {
  //     toast.success("Welcome back!");
  //   }

  return (
    <Flex height={'60vh'} m={(6, 6, 6, 6)}>
      <div>
        <div>
          <div>
            <form>
              <FormLabel>Email</FormLabel>
              <Input
                style={{ width: '500px' }}
                name="username"
                className="rw-input"
                placeholder="Enter Your Email"
                // ref={usernameRef}
                // validation={{
                //   required: {
                //     value: true,
                //     message: "invalid email address",
                //   },
                // }}
              />

              <FormErrorMessage className="rw-field-error" />

              <FormLabel>Password</FormLabel>
              <Input
                style={{ width: '500px' }}
                name="password"
                className="rw-input"
                placeholder="Enter your Password"
                autoComplete="current-password"
                // validation={{
                //   required: {
                //     value: true,
                //     message: "Enter a valid password to sign in",
                //   },
                // }}
              />

              <FormErrorMessage />
              <Box mt={3} fontWeight={'bold'}>
                <Link>Forgot Your Password?</Link>
              </Box>

              <Button bg={'#4C956C'} color={'white'} mt={5} width="100%">
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
