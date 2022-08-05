import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

import { Link, routes } from '@redwoodjs/router'

const AboutDashboardSection = () => {
  return (
    <Center
      width="100%"
      height="90vh"
      position="relative"
      bgPos="center"
      bgSize="cover"
      bgImage="url('about-img.png')"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="20%"
        left={{ sm: '20%', md: '5%' }}
        bgColor="rgb(19, 28, 39, 0.6);"
        color="white"
        borderRadius="7px"
      >
        <Text
          m="1.5rem"
          fontSize={{ sm: '1.3rem', md: '1.3rem', xl: '32px' }}
          fontWeight="600"
        >
          Reimagining the
          <span style={{ color: '#D68C45' }}> Heavy Equipment</span> <br />{' '}
          sector to create a seamless <br />
          transaction experience for today’s <br /> digital world
        </Text>
      </Box>
      <Flex
        top="76%"
        left="10%"
        position="absolute"
        width="80%"
        bgColor="white"
        borderRadius="7px"
      >
        <InputGroup>
          <InputLeftElement
            cursor="pointer"
            color="#D68C45"
            height="100%"
            pl="10px"
          >
            <Link to={routes.productsListing()}>
              <BiSearch size="1.7rem" />
            </Link>
          </InputLeftElement>
          <Input
            padding="1.7rem"
            pl="3rem"
            width="50%"
            border="none"
            placeholder="Search"
            borderRightRadius="none"
            fontSize="18px"
          ></Input>
          <Center>
            <Divider
              orientation="vertical"
              height="65%"
              bgColor="#5A5A5A"
              width="1.5px"
            />
          </Center>
          <Input
            padding="1.7rem"
            width="50%"
            border="none"
            placeholder="Zip code"
            borderLeftRadius="none"
            borderRightRadius="none"
            fontSize="18px"
          ></Input>
        </InputGroup>

        <Button
          width="25%"
          size="md"
          bg="#4C956C"
          _hover={{ bg: '#D68C45' }}
          color="white"
          ml="1rem"
          mr="1rem"
          mt="0.4rem"
        >
          <Link to={routes.productsDetail()}>Search</Link>
        </Button>
      </Flex>
    </Center>
  )
}

export default AboutDashboardSection
