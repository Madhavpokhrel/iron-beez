import React from 'react';
import { Center, Flex, Box, Text } from '@chakra-ui/react'
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticlesCell = ({ articles }) => {
  return (
    <Center height="100vh">
      <Box
        bgPos="center"
        bgSize="cover"
        height="85%"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('https://th.bing.com/th/id/R.9a76e5a67159de63134af47f608f77b9?rik=5hDXqQ%2bxUEM1BQ&pid=ImgRaw&r=0')"
      >
        <Flex mt="1rem" ml="4rem" justifyContent="flex-start">
          <Text color="white" fontSize="32px" fontWeight="500">
            Recent Articles
          </Text>
        </Flex>
        <Flex ml="2rem" mr="2rem">
          {articles.map((item) => {
            return <ArticleCard key={item.id} article={item} />
          })}
        </Flex>
      </Box>
    </Center>
  )
}
