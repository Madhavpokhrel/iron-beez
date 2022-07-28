import { HStack, Image, Box, Flex, Divider, Text } from '@chakra-ui/react'

import product from 'src/Image/product2.png'

const Details = () => {
  return (
    <div>
      <Flex width={'100%'} p={10} paddingLeft={'9%'}>
        <HStack spacing={'0px'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px'}>
          <Box width={'455px'} height={'300px'} bg={'white'}>
            <Image
              src={product}
              alt="Products not shown"
              width={'455px'}
              height={'300px'}
            />
          </Box>
          <Box
            width={'455px'}
            height={'300px'}
            bg={'#EFEFEF'}
            borderRadius={'0px 6px 6px 0px'}
          >
            <Box pl={4} pr={5}>
              <Box mt={4} pb={3}>
                <HStack justifyContent={'space-between'}>
                  <Text textColor={'#064789'} fontWeight={'700'}>
                    LUGONG LG946
                  </Text>

                  <Text textColor={' #D68C45'} fontWeight={'600'}>
                    $22000
                  </Text>
                </HStack>
                <Text fontWeight={'700'} textColor={'#949494'}>
                  2020
                </Text>
              </Box>

              <HStack justifyContent={'space-between'}>
                <Text
                  fontWeight={'400'}
                  fontSize={'15px'}
                  textColor={'#949494'}
                >
                  Make
                </Text>

                <Text textColor={'#525252'} fontWeight={'600'}>
                  CAT
                </Text>
              </HStack>
              <Divider borderColor=" #C0C0C0" mt={1} mb={2} />
              <HStack justifyContent={'space-between'}>
                <Text
                  fontWeight={'400'}
                  fontSize={'15px'}
                  textColor={'#949494'}
                >
                  Model
                </Text>

                <Text textColor={'#525252'} fontWeight={'600'}>
                  2020
                </Text>
              </HStack>
              <Divider borderColor=" #C0C0C0" mt={1} mb={2} />
              <HStack justifyContent={'space-between'}>
                <Text
                  fontWeight={'400'}
                  fontSize={'15px'}
                  textColor={'#949494'}
                >
                  Hours used
                </Text>

                <Text textColor={'#525252'} fontWeight={'600'}>
                  200hrs
                </Text>
              </HStack>
              <Divider borderColor=" #C0C0C0" mt={1} mb={2} />
              <HStack justifyContent={'space-between'}>
                <Text
                  fontWeight={'400'}
                  fontSize={'15px'}
                  textColor={'#949494'}
                >
                  Inventory type
                </Text>

                <Text textColor={'#525252'} fontWeight={'600'}>
                  Semi truck
                </Text>
              </HStack>
              <Divider borderColor=" #C0C0C0" mt={1} mb={2} />
              <HStack justifyContent={'space-between'}>
                <Text
                  fontWeight={'400'}
                  fontSize={'15px'}
                  textColor={'#949494'}
                >
                  Year
                </Text>

                <Text textColor={'#525252'} fontWeight={'600'}>
                  2
                </Text>
              </HStack>
              <Divider borderColor=" #C0C0C0" mt={1} mb={2} />
            </Box>
          </Box>
        </HStack>
      </Flex>
    </div>
  )
}

export default Details
