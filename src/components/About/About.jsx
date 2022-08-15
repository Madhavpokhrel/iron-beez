import React from 'react'
import { Flex, Image, Text, Box, Heading, Center } from '@chakra-ui/react'

import AboutImage from '../../assets/images/about_section.png'

const About = () => {
  return (
    <Center>
      <Flex p="30px">
        <Box
          w="750px"
          h="500px"
          borderRadius="6px"
          zIndex="1"
          position="absolute"
          shadow="lg"
          bg="#ffffff"
          mt="45px"
          p="40px"
        >
          <Heading fontSize="32px" color="#064789">
            Who we are?
          </Heading>
          <Text pt="30px" fontSize="16px" color="#5A5A5A">
            Ironbeez is a startup dedicated to the e-commerce of heavy machinery
            on the American market. But most importantly, we are dedicated to
            the amazing men and women that make our modern world a reality. Our
            mission is to make their lives easier by streamlining the industry’s
            processes and accelerate the flow of exchanges in a market slowed
            down by dispersion.
          </Text>
          <Text pt="20px" fontSize="16px" color="#5A5A5A">
            Ironbeez will be a dedicated space that will bring together and
            centralize the total sum of materials and services related to it and
            allow the company to achieve its objectives:
          </Text>
          <Text pt="20px" fontSize="16px" color="#5A5A5A">
            Sales, Rentals, Financing, Specialized transportation, Advice,
            Training, Insurance, Information, Services, Human Resources… An
            ultra-specialized and innovative ecosystem towards which all offers
            and all requests will converge and which will provide in a few
            clicks all of the key elements that influence the decision-making
            process… From the awakening of needs to the search for information,
            from the evaluation of alternatives to the purchase decision.
          </Text>
        </Box>
        <Box w="600px" h="600px">
          <Text></Text>
        </Box>
        <Box w="675px" h="500px">
          <Image
            src={AboutImage}
            alt="about image"
            boxSize="600px"
            objectFit="cover"
            width="750px"
          />
        </Box>
      </Flex>
    </Center>
  )
}

export default About
