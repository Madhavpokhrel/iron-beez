import React from 'react';
import {
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Input,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';

const Enquiry = () => {
  return (
    <Stack>
      <Flex flexDirection={'column'}>
        <Text
          textColor={'#064789'}
          fontWeight={'700'}
          fontSize={{ base: '20px', sm: '24px', md: '26px', lg: '26px' }}
          mb={'30px'}
          align={'center'}
        >
          Send enquiry
        </Text>

        <HStack
          spacing={{ base: '0.5rem', sm: '1rem', md: '7rem', lg: '9rem' }}
        >
          <VStack spacing={{ base: '1', sm: '2', md: '3', lg: '4' }}>
            <FormControl>
              <FormLabel color={'#949494'} fontWeight={'500'}>
                First name
              </FormLabel>
              <Input
                placeholder="First name"
                width={{ base: '150px', sm: '220px', md: '280px', lg: '306px' }}
                isRequired
                color={'#949494'}
                bg={'#D9D9D9'}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={'#949494'} fontWeight={'500'}>
                Email{' '}
              </FormLabel>
              <Input
                type="email"
                isRequired
                placeholder="Email"
                width={{ base: '150px', sm: '220px', md: '280px', lg: '306px' }}
                color={'#949494'}
                bg={'#D9D9D9'}
              />
            </FormControl>
          </VStack>
          <VStack spacing={{ base: '1', sm: '2', md: '3', lg: '4' }}>
            <FormControl>
              <FormLabel color={'#949494'} fontWeight={'500'}>
                Last name
              </FormLabel>
              <Input
                placeholder="Last name"
                width={{ base: '150px', sm: '220px', md: '280px', lg: '306px' }}
                isRequired
                color={'#949494'}
                bg={'#D9D9D9'}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={'#949494'} fontWeight={'500'}>
                phone number
              </FormLabel>
              <Input
                type="tel"
                isRequired
                placeholder="phone number"
                width={{ base: '150px', sm: '220px', md: '280px', lg: '306px' }}
                color={'#949494'}
                bg={'#D9D9D9'}
              />
            </FormControl>
          </VStack>
        </HStack>

        <FormLabel
          mt={{ base: '1', sm: '4', md: '4', lg: '4' }}
          color={'#949494'}
          fontWeight={'500'}
        >
          Message
        </FormLabel>
        <Textarea placeholder="Type here" color={'#949494'} bg={'#D9D9D9'} />
        <Flex display={'flex'} justifyContent={'flex-end'}>
          <Button
            bg="#4C956C"
            color={'white'}
            mt={{ base: '4', sm: '7', md: '7', lg: '8' }}
            width={{ base: '120px', sm: '140px', md: '170px', lg: '180px' }}
            height={'45px'}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Enquiry;
