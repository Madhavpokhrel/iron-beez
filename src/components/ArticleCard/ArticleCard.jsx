import React from 'react';
import {
  Center,
  Box,
  Image,
  Text,
  Heading,
  Button,
  Flex,
} from '@chakra-ui/react'

export const ArticleCard = (props) => {
  return (
    <Center color="white" border="solid #D68C45" m="2rem">
      <Box p="20px">
        <Image
          width="100%"
          height="50%"
          mb="10px"
          src={props.imageUrl}
        ></Image>
        <Heading fontSize="1rem" mb="5px">
          test
        </Heading>
        <Text mb="10px">{props.body}</Text>
        <Flex w="100%" justifyContent="flex-end">
          <Button bgColor="#4C956C" _hover={{ bgColor: '#D68C45' }}>
            Read more
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}
