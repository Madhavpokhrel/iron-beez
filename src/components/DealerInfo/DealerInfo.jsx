import { HStack, Box, Text, Divider } from '@chakra-ui/react'

const DealerInfo = () => {
  return (
    <div>
      <Box>
        <Text
          textColor={'#064789'}
          fontWeight={'700'}
          mb={{ base: '3', sm: '3', md: '2', lg: '2' }}
        >
          Dealer Info
        </Text>
        <HStack
          justifyContent={'space-between'}
          ml={{ base: '0', sm: '7', md: '10', lg: '12' }}
          mr={{ base: '0', sm: '7', md: '10', lg: '12' }}
          fontWeight={'700'}
        >
          <Text>Name</Text>

          <Box width={'30%'} textAlign={'center'}>
            <Text>location</Text>
          </Box>
          <Text>City</Text>
          <Text>State</Text>
        </HStack>
        <Divider
          borderColor=" #C0C0C0"
          mb={{ base: '1', sm: '3', md: '3', lg: '3' }}
          mt={{ base: '5', sm: '1', md: '1', lg: '1' }}
        />
        <HStack
          justifyContent={'space-between'}
          ml={{ base: '0', sm: '7', md: '10', lg: '12' }}
          mr={{ base: '0', sm: '7', md: '10', lg: '12' }}
          fontWeight={'500'}
          textColor={'#525252'}
        >
          <Text>John Doe</Text>
          <Box width={'30%'}>
            <Text>8475 Loretto Rd Loretto, Kentucky(KY), 40037</Text>
          </Box>
          <Text>New york</Text>
          <Text>Texas</Text>
        </HStack>
      </Box>
    </div>
  )
}

export default DealerInfo
