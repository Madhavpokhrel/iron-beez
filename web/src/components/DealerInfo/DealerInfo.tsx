import { HStack, Box, Text, Divider } from '@chakra-ui/react'
const DealerInfo = () => {
  return (
    <div>
      <Box width={'90%'} ml={16} mt={10} mb={'5rem'}>
        <Text textColor={'#064789'} fontWeight={'700'} mb={2}>
          Dealer Info
        </Text>
        <HStack
          justifyContent={'space-between'}
          ml={12}
          mr={12}
          fontWeight={'700'}
        >
          <Text>Name</Text>
          <Box width="30%" textAlign={'center'}>
            <Text>location</Text>
          </Box>
          <Text>City</Text>
          <Text>State</Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mb={3} mt={1} />
        <HStack
          justifyContent={'space-between'}
          ml={12}
          mr={12}
          fontWeight={'500'}
          textColor={'#525252'}
        >
          <Text>John Doe</Text>
          <Box width="30%">
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
