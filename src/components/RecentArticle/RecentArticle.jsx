import React from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Center,
  Stack,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import ArticlePic from '../../assets/Image/ArticlePic.png';
function RecentArticle() {
  return (
    <div style={{ width: '100%',marginTop:'7rem',marginBottom:'7rem' }}>
      <Center
        height="100%"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('https://th.bing.com/th/id/R.9a76e5a67159de63134af47f608f77b9?rik=5hDXqQ%2bxUEM1BQ&pid=ImgRaw&r=0')"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Box width="79%" pt={'10'} pb={'10'}>
          <Text
            color="#FFFFFF"
            fontSize="32px"
            fontWeight="500"
            alignItems="flex-start"
            pb="1rem"
            // pt="7rem"
          >
            Recent Articles
          </Text>
          <SimpleGrid columns={{base:1,sm:2,lg:3}} spacing={10}>
            <Box
              height="100%"
              minHeight={{base:'fit-content',lg:'350'}}
              border={'3px solid #D68C45'}
              width="100%"
            >
              <Stack>
                <Box boxSize={'100%'} height={'50%'} padding="1rem">
                  <Image
                    size="100%"
                    src={ArticlePic}
                    alt={'Article Image'}
                    width={'100%'}
                    height={'100%'}
                  />
                  <Text
                    noOfLines={3}
                    fontWeight="600"
                    fontSize={{base:'16px',lg:'18px'}}
                    lineHeight="19px"
                    color={'#FFFFFF'}
                    pt={2}
                  >
                    The Top Reasons It’s Better to Rent Heavy Equipment Instead
                    of Buying
                  </Text>
                  <Text
                    noOfLines={3}
                    lineHeight="17px"
                    fontSize={{base:'14px',lg:'16px'}}
                    fontWeight="100"
                    color={'#FFFFFF'}
                    pt={3}
                    pb={1}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas numquam veniam quasi voluptas unde qui deleniti vitae
                    totam perspiciatis
                  </Text>
                  <Flex justify={'end'} mt="2">
                    <Button
                      colorScheme="teal"
                      width={{
                        base: '78px',
                        sm: '90px',
                        md: '130px',
                        lg: '130px',
                      }}
                      height={'7'}
                      rounded={'2'}
                      padding={{base:"0.3rem",sm:'0.8rem'}}
                      fontSize={{base:'12px',sm:'14px'}}
                    >
                      Read More
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </Box>
            <Box
              height="100%"
              minHeight={{base:'fit-content',lg:'350'}}
              border={'3px solid #D68C45'}
              width="100%"
            >
              <Stack>
                <Box boxSize={'100%'} height={'50%'} padding="1rem">
                  <Image
                    size="100%"
                    src={ArticlePic}
                    alt={'Article Image'}
                    width={'100%'}
                    height={'100%'}
                  />
                  <Text
                    noOfLines={3}
                    fontWeight="600"
                    fontSize={{base:'16px',lg:'18px'}}
                    lineHeight="19px"
                    color={'#FFFFFF'}
                    pt={2}
                  >
                    The Top Reasons It’s Better to Rent Heavy Equipment Instead
                    of Buying
                  </Text>
                  <Text
                    noOfLines={3}
                    lineHeight="17px"
                    fontSize={{base:'14px',lg:'16px'}}
                    fontWeight="100"
                    color={'#FFFFFF'}
                    pt={3}
                    pb={1}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas numquam veniam quasi voluptas unde qui deleniti vitae
                    totam perspiciatis
                  </Text>
                  <Flex justify={'end'} mt="2">
                    <Button
                      colorScheme="teal"
                      width={{
                        base: '78px',
                        sm: '90px',
                        md: '130px',
                        lg: '130px',
                      }}
                      height={'7'}
                      rounded={'2'}
                      padding={{base:"0.3rem",sm:'0.8rem'}}
                      fontSize={{base:'12px',sm:'14px'}}
                    >
                      Read More
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </Box>
            <Box
              height="100%"
              minHeight={{base:'fit-content',lg:'350'}}
              border={'3px solid #D68C45'}
              width="100%"
            >
              <Stack>
                <Box boxSize={'100%'} height={'50%'} padding="1rem">
                  <Image
                    size="100%"
                    src={ArticlePic}
                    alt={'Article Image'}
                    width={'100%'}
                    height={'100%'}
                  />
                  <Text
                    noOfLines={3}
                    fontWeight="600"
                    fontSize={{base:'16px',lg:'18px'}}
                    lineHeight="19px"
                    color={'#FFFFFF'}
                    pt={2}
                  >
                    The Top Reasons It’s Better to Rent Heavy Equipment Instead
                    of Buying
                  </Text>
                  <Text
                    noOfLines={3}
                    lineHeight="17px"
                    fontSize={{base:'14px',lg:'16px'}}
                    fontWeight="100"
                    color={'#FFFFFF'}
                    pt={3}
                    pb={1}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas numquam veniam quasi voluptas unde qui deleniti vitae
                    totam perspiciatis
                  </Text>
                  <Flex justify={'end'} mt="2">
                    <Button
                      colorScheme="teal"
                      width={{
                        base: '78px',
                        sm: '90px',
                        md: '130px',
                        lg: '130px',
                      }}
                      height={'7'}
                      rounded={'2'}
                      padding={{base:"0.3rem",sm:'0.8rem'}}
                      fontSize={{base:'12px',sm:'14px'}}
                    >
                      Read More
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
}

export default RecentArticle;
