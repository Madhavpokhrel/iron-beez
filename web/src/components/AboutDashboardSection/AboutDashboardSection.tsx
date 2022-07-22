import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

import About1 from 'src/Image/about-img.png'
const AboutDashboardSection = () => {
  return (
    <Box width="100%" height="90vh" position="relative">
      <Image src={About1} height="100%" width="100%" />

      <Box
        position="absolute"
        top="23%"
        left={{ sm: '20%', md: '4%' }}
        bgColor="black"
        opacity="0.5"
        color="white"
        height={{ sm: '30%', lg: '28%', xl: '38%', '2xl': '30%' }}
        width={{ sm: '60%', md: '47%', lg: '45%', xl: '45%', '2xl': '40%' }}
        borderRadius="7px"
      >
        <Text
          marginTop="1rem"
          marginLeft="2rem"
          marginBottom="1.5rem"
          opacity="1"
          fontSize={{ sm: '1.3rem', md: '1.3rem', xl: '1.9rem' }}
          fontWeight="600"
          width="80%"
        >
          Reimagining the
          <span style={{ color: '#D68C45' }}> Heavy Equipment</span> sector to
          create a seamless transaction experience for today’s digital world
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
            Search
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutDashboardSection
