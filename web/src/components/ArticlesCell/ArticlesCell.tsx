import { Center, Flex, Box, Text } from '@chakra-ui/react'
import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ArticleCard from '../ArticleCard/ArticleCard'

export const QUERY = gql`
  query ArticlesQuery {
    articles {
      id
      title
      body
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
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
            return <ArticleCard key={item.id} article={item}></ArticleCard>
          })}
        </Flex>
      </Box>
    </Center>
  )
}
