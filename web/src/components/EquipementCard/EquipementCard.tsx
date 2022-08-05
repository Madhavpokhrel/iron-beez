import { Image, Box, Flex, Text, HStack, Tooltip } from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'
import { Equipment } from 'types/graphql'

const EquipementCard = ({ equipment }: { equipment: Equipment }) => {
  return (
    <>
      <Box boxShadow="md" p="10px" m="5px" borderRadius="7px" bgColor="white">
        <Image height="180px" width="300px" src={equipment.image_url} />

        <Tooltip
          label="2021 Felco 211-50 qqqqq www  eee e rrrrr rr"
          aria-label="A tooltip"
        >
          <Text noOfLines={1} p="5px" pl="10px" fontWeight="bold">
            {equipment.heading}
          </Text>
        </Tooltip>
        <Box>
          <Flex justifyContent="space-between" pb="10px" pl="5px">
            <Flex color="#949494" fontSize="16px" flex="1.5">
              <IoLocationOutline size="1.5rem" />
              {equipment.location}
            </Flex>
            <Text color="#949494" fontSize="16px" flex="1">
              {equipment.time}
            </Text>
          </Flex>
          <HStack
            transform={'translateX(15px)'}
            height="1px"
            width="90%"
            bg="#F0F0F0"
          ></HStack>
          <Flex
            paddingTop="10px"
            paddingLeft="1rem"
            paddingRight="1rem"
            paddingBottom="0.5rem"
            justifyContent="space-between"
          >
            <Text color="#949494" fontSize="20px" flex="2">
              Price{' '}
            </Text>
            <Text fontWeight="500" fontSize="20px" color="#F6A91F" flex="1">
              {equipment.price}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default EquipementCard
