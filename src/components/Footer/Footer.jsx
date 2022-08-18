import {
  Box,
  HStack,
  Flex,
  Text,
  Input,
  FormControl,
  Image,
  Button,
  VStack,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { RiCopyrightLine } from 'react-icons/ri';

import first from '../../assets/images/firsticon.png';
import logo from '../../assets/images/Iron-logo.png';
import second from '../../assets/images/secondicon.png';
import third from '../../assets/images/thirdicon.png';

const Footer = () => {
  return (
    <div>
      <Stack
        bg="#064789"
        w="100%"
        height={{ base: '14', sm: '14', md: '12', lg: '12' }}
      >
        <Flex alignItems={'center'}>
          <Text
            ml={{ base: '1', sm: '3', md: '4', lg: '4' }}
            color="white"
            fontWeight="bold"
            mt={'4px'}
            fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
          >
            Subscribe Our Newslater
          </Text>

          <HStack
            mt={2}
            flexGrow={1}
            ml={{ base: '2%', sm: '6%', md: '15%', lg: '19%' }}
            spacing={{ base: '2', sm: '3', md: '5', lg: '5' }}
            alignItems={'center'}
          >
            <FormControl
              width={{ base: '55%', sm: '60%', md: '50%', lg: '55%' }}
              bg={'white'}
              rounded={8}
            >
              <Input
                id="email"
                type="email"
                isRequired
                placeholder={'Email'}
                size="36px"
              />
            </FormControl>
            <Button
              colorScheme="teal"
              width={{ base: '78px', sm: '90px', md: '130px', lg: '130px' }}
              height={'7'}
              rounded={'2'}
            >
              Subscribe
            </Button>
          </HStack>
        </Flex>
      </Stack>
      <Flex>
        <Box
          bg="white"
          width={{ base: '140px', sm: '180px', md: '240px', lg: '240px' }}
          height={{ base: '300px', sm: '300px', md: '220px', lg: '220px' }}
        >
          <Flex
            mt={{ base: '40px', sm: '50px', md: '35px', lg: '35px' }}
            ml={'15px'}
            width={{ base: '80%', sm: '80%', md: '82%', lg: '82%' }}
          >
            <Image src={logo} alt="Footer logo" />
          </Flex>
          <Flex
            ml={{ base: '55px', sm: '70px', md: '60px', lg: '60px' }}
            mt={{ base: '30px', sm: '40px', md: '50px', lg: '50px' }}
            gap={{ base: '12', sm: '12', md: '4', lg: '4' }}
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            }}
          >
            <Image
              borderRadius="full"
              boxSize="27px"
              src={first}
              alt="Dan Abramov"
            />
            <Image
              borderRadius="full"
              boxSize="27px"
              src={second}
              alt="Dan Abramov"
            />
            <Image
              rounded={'half'}
              boxSize="27px"
              src={third}
              alt="Dan Abramov"
            />
          </Flex>
        </Box>
        <Flex
          flex="1"
          bg="#D68C45"
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          <Stack
            fontSize={'14px'}
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            mt={{ base: '2', sm: '5', md: '8', lg: '8' }}
            spacing={{ base: '20px', sm: '25px', md: '100px', lg: '200px' }}
          >
            <Stack align={'left'} fontWeight={'500'}>
              <Text fontWeight={'bold'}>Terms of services</Text>
              <Text fontWeight={'bold'}>Polices</Text>
              <Text fontWeight={'bold'}>Privacy Policy</Text>
              <Text fontWeight={'bold'}>Support Center</Text>
            </Stack>

            <Stack align={'left'}>
              <Text fontWeight={'bold'}>Locations:</Text>
              <Text>Columbs Oho</Text>
            </Stack>

            <VStack align={'left'}>
              <Text fontWeight={'bold'}>Phone number:</Text>
              <Text>(856) 486-9279</Text>
            </VStack>
          </Stack>
          <Flex
            mt={{ base: '25', sm: '45' }}
            bottom="7"
            position={{
              base: 'none',
              sm: 'none',
              md: 'absolute',
              lg: 'absolute',
            }}
            justifyContent={'center'}
            ml={{ base: '5', sm: '3', md: '55', lg: '55' }}
            fontSize={'15px'}
            fontWeight={'bold'}
            mb={{ base: '8px', sm: '17px', md: '0px', lg: '0px' }}
          >
            <RiCopyrightLine size={'20px'} /> 2022 ironbeez,All Rights Reserved
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
