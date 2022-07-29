import {
  Box,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Input,
  Flex,
  Text,
} from '@chakra-ui/react'

const Enquiry = () => {
  return (
    <div>
      <Flex justifyContent="center" mt={'5rem'} mb={'4rem'}>
        <Box width={'763px'}>
          <Flex justifyContent="center">
            <Text
              textColor={'#064789'}
              fontWeight={'700'}
              fontSize={'26px'}
              mb={'30px'}
            >
              Send enquiry
            </Text>
          </Flex>
          <HStack spacing={'9rem'}>
            <VStack spacing={'4'}>
              <FormControl>
                <FormLabel color={'#949494'} fontWeight={'500'}>
                  First name
                </FormLabel>
                <Input
                  placeholder="First name"
                  width={'306px'}
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
                  color={'#949494'}
                  bg={'#D9D9D9'}
                />
              </FormControl>
            </VStack>
            <VStack spacing={'4'}>
              <FormControl>
                <FormLabel color={'#949494'} fontWeight={'500'}>
                  Last name
                </FormLabel>
                <Input
                  placeholder="Last name"
                  width={'306px'}
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
                  color={'#949494'}
                  bg={'#D9D9D9'}
                />
              </FormControl>
            </VStack>
          </HStack>

          <FormLabel mt={'4'} color={'#949494'} fontWeight={'500'}>
            Message
          </FormLabel>
          <Textarea placeholder="Type here" color={'#949494'} bg={'#D9D9D9'} />
          <Flex display={'flex'} justifyContent={'flex-end'}>
            <Button
              bg="#4C956C"
              color={'white'}
              mt={'8'}
              width={'180px'}
              height={'45px'}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default Enquiry
