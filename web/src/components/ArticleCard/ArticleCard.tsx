import {
  Center,
  Box,
  Image,
  Text,
  Heading,
  Button,
  Flex,
} from '@chakra-ui/react'
import { Article } from 'types/graphql'

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Center color="white" border="solid #D68C45" m="2rem">
      <Box p="20px">
        <Image
          width="100%"
          height="50%"
          mb="10px"
          src={article.imageUrl}
        ></Image>
        <Heading fontSize="1rem" mb="5px">
          {article.title}
        </Heading>
        <Text mb="10px">{article.body}</Text>
        <Flex w="100%" justifyContent="flex-end">
          <Button bgColor="#4C956C" _hover={{ bgColor: '#D68C45' }}>
            Read more
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}

export default ArticleCard
