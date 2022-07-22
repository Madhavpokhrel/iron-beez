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
} from '@chakra-ui/react'
import { RiCopyrightLine } from 'react-icons/ri'

import first from 'src/images/firsticon.png'
import logo from 'src/images/Iron-logo.png'
import second from 'src/images/secondicon.png'
import third from 'src/images/thirdicon.png'

const Footer = () => {
  return (
    <div>
      <Box bg="#064789" w="100%" height={'12'}>
        <Flex alignItems={'center'}>
          <Text ml={4} color="white" font-weight="bold" mt={'4px'}>
            Subscribe Our Newslater
          </Text>

          <HStack
            mt={2}
            flexGrow={1}
            ml={'24%'}
            spacing={5}
            alignItems={'center'}
          >
            <FormControl width="40%" bg={'white'} rounded={8}>
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
              width={'130px'}
              height={'7'}
              rounded={'2'}
            >
              Subscribe
            </Button>
          </HStack>
        </Flex>
      </Box>
      <Flex>
        <Box bg="white" width="210px" height="188px">
          <Box mt={'35px'} ml={'15px'} width={'82%'}>
            <Image src={logo} alt="Footer logo" />
          </Box>
          <HStack ml={'60px'} spacing={2} mt={'50px'}>
            <Image
              borderRadius="full"
              boxSize="23px"
              src={first}
              alt="Dan Abramov"
            />
            <Image
              borderRadius="full"
              boxSize="23px"
              src={second}
              alt="Dan Abramov"
            />
            <Image
              rounded={'half'}
              boxSize="23px"
              src={third}
              alt="Dan Abramov"
            />
          </HStack>
        </Box>
        <Box flex="1" bg="#D68C45" display={'flex'} justifyContent={'center'}>
          <HStack spacing={20} mb={5} fontSize={'14px'}>
            <VStack align={'left'} fontWeight={'500'}>
              <Text fontWeight={'bold'}>Terms of services</Text>
              <Text fontWeight={'bold'}>Polices</Text>
              <Text fontWeight={'bold'}>Privacy Policy</Text>
              <Text fontWeight={'bold'}>Support Center</Text>
            </VStack>
            <VStack align={'left'} transform={'translateY(-55%)'}>
              <Text fontWeight={'bold'}>Locations:</Text>
              <Text>Columbs Oho</Text>
            </VStack>
            <VStack align={'left'} transform={'translateY(-55%)'}>
              <Text fontWeight={'bold'}>Phone number:</Text>
              <Text>(856) 486-9279</Text>
            </VStack>
          </HStack>
          <Flex
            bottom="7"
            position={'absolute'}
            justifyContent={'center'}
            ml={55}
            fontSize={'15px'}
            fontWeight={'bold'}
          >
            <RiCopyrightLine size={'20px'} /> 2022 ironbeez,All Rights Reserved
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default Footer
