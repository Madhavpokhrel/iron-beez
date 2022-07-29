import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

import { Link, routes } from '@redwoodjs/router'

// import About1 from 'src/Image/about-img.png'

const AboutDashboardSection = () => {
  return (
    <Center
      width="100%"
      height="90vh"
      position="relative"
      bgPos="center"
      bgSize="cover"
      bgImage="url('about-img.png')"
    >
      <Box
        position="absolute"
        top="20%"
        left={{ sm: '20%', md: '4%' }}
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
        left="15%"
        position="absolute"
        width="80%"
        boxShadow="base"
        paddingLeft="0.5rem"
      >
        <Box
          bgColor="white"
          paddingTop="1.1rem"
          paddingLeft="1rem"
          paddingRight="1rem"
          paddingBottom="0.9rem"
          pos="absolute"
          top="0"
          left="-12"
          borderBottomLeftRadius="7px"
          borderTopLeftRadius="7px"
          cursor="pointer"
          _hover={{ bg: 'lightgray' }}
        >
          {' '}
          <BiSearch color="#D68C45" size="1.5rem" fontWeight="bold" />
        </Box>
        <input
          style={{
            padding: '0.5rem',
            paddingLeft: '4rem',
            width: '38%',
            border: 'none',
          }}
          placeholder="Search"
        ></input>

        {/* <Divider orientation="vertical" height="70%" /> */}
        <input
          style={{
            padding: '1rem',
            width: '36%',
            border: 'none',
          }}
          placeholder="Zip code"
        ></input>
        <Box
          bgColor="white"
          width="22%"
          borderTopRightRadius="7px"
          borderBottomRightRadius="7px"
        >
          <Button
            position="absolute"
            right="6%"
            top="15%"
            size="md"
            bg="#4C956C"
            _hover={{ bg: '#D68C45' }}
            width="17%"
            color="white"
          >
            <Link to={routes.productsDetail()}>Search</Link>
          </Button>
        </Box>
      </Flex>
    </Center>
  )
}

export default AboutDashboardSection
