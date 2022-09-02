import {
  background,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { ImSwitch } from 'react-icons/im';
import { MdModeEdit } from 'react-icons/md';
import UserFavourite from '../UserFavourite/UserFavourite';
function UserDetail() {
  return (
    <div style={{marginBottom:'7rem'}}>
    <div style={{ width: '85%', margin: 'auto' }}>
      <Center
        mt={'8rem'}
        bgColor="#EFEFEF"
        position={'relative'}
        boxShadow="0px 0px 12px rgba(0, 0, 0, 0.18)"
        borderRadius="4px"
      >
        <Box position={'absolute'} top="12px" right="15px">
          <Button
            bgColor="#4C956C"
            color={'#ffffff'}
            width={{ base: '90px', sm: '90px', md: '130px', lg: '130px' }}
            height={'7'}
            rounded={'2'}
            padding="1.2rem"
            _hover={{ bgColor: '#4C956C' }}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
            borderRadius="6px"
          >
            Log out{' '}
            <Box ml={2}>
              <ImSwitch />
            </Box>
          </Button>
        </Box>
        <Stack mt={{ base: '20px', sm: '12px' }} width={'500px'} p={2} pb="9">
          <Flex justify={'center'} align="center" direction="column">
            <Box width={'110px'}>
              <BiUserCircle size={'lg'} />
            </Box>
            <Box w="auto">
              <Heading fontSize={'1.4rem'}>John Doe</Heading>
            </Box>
          </Flex>

          <Flex justify="space-between" pt={2} pb={2}>
            <Text
              fontWeight={600}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              Number
            </Text>
            <Text
              fontWeight={500}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              02383723232
            </Text>
          </Flex>
          <Flex justify="space-between" pt={2} pb={2}>
            <Text
              fontWeight={600}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              Email
            </Text>
            <Text
              fontWeight={500}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              test@gmail.com
            </Text>
          </Flex>
          <Flex justify="space-between" pt={2} pb={2}>
            <Text
              fontWeight={600}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              Zip Code
            </Text>
            <Text
              fontWeight={500}
              color="#5A5A5A"
              lineHeight={'22px'}
              fontSize="1.2rem"
            >
              73923
            </Text>
          </Flex>

          <Box>
            <Button
              bgColor="#4C956C"
              color={'#ffffff'}
              width={'100%'}
              height={'7'}
              rounded={'2'}
              padding="1.2rem"
              _hover={{ bgColor: '#4C956C' }}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
              borderRadius="6px"
            >
              <Box fontSize={20}>
                <MdModeEdit />
              </Box>
              Edit{' '}
            </Button>
          </Box>
        </Stack>
      </Center>
      <Box mt={'6rem'}>
        <UserFavourite />
      </Box>
    </div>
    </div>
  );
}

export default UserDetail;
