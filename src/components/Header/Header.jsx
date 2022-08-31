import { Box, Button, Flex, HStack, Image, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Image/Iron-logo.png';
import {
  setLoginTab,
  setSignupTab
} from '../../store/features/Tab/TabSlice';
import { useDispatch } from 'react-redux';
const Header = () => {

  const dispatch = useDispatch();
  return (
    <Center
      height={{ base: '8vh', sm: '10vh', md: '12vh', lg: '12vh' }}
      boxShadow="lg"
    >
      <Flex width="95%" justifyContent="space-between">
        <Box paddingLeft={{ base: '1rem', lg: '2rem' }}>
          <Link to="/">
            <Image
              src={logo}
              width={{ base: '110px', sm: '190px', md: '200px', lg: '220px' }}
              height={{ base: '30px', sm: '33px', md: '37px', lg: '40px' }}
            />
          </Link>
        </Box>
        <HStack
          marginRight={{ base: '0rem', sm: '1.5rem', md: '3rem', lg: '3rem' }}
        >
          <Button
            color={'black'}
            _hover={{ bg: 'none' }}
            padding={'0'}
            margin={'0'}
            marginRight={{ base: '0.3rem', lg: '1rem' }}
            bg={'none'}
            fontSize={{ base: '14px', sm: '16px', md: '17px', lg: '18px' }}
            onClick={()=>dispatch(setLoginTab())}
          >
            <Link to="/auth">Login</Link>
          </Button>

          <Button
            fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18px' }}
            width={{ base: '20%', sm: '50%', md: '60%', lg: '70%' }}
            height={{ base: '70%', sm: '80%', md: '85%', lg: '100%' }}
            _hover={{ bg: '#D68C45' }}
            bg="#D68C45"
            color="white"
            pl="3rem"
            pr="3rem"
            onClick={()=>dispatch(setSignupTab())}
          >
            <Link to="/auth">Signup</Link>
          </Button>
        </HStack>
      </Flex>
    </Center>
  );
};

export default Header;
