// import { TimeIcon } from '@chakra-ui/icons'
import { Image, Box, Flex, Text, HStack, Tooltip } from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'
import { Equipment } from 'types/graphql'

const EquipementCard = ({ equipment }: { equipment: Equipment }) => {
  return (
    <>
      <Box boxShadow="md" p="1rem" m="1rem" borderRadius="7px">
        <Image width="100%" height="60%" p="15px" src={equipment.image_url} />
        <Tooltip
          label="2021 Felco 211-50 qqqqq www  eee e rrrrr rr"
          aria-label="A tooltip"
        >
          <Text
            noOfLines={1}
            paddingLeft="1.8rem"
            paddingBottom="5px"
            paddingRight="1.8rem"
            fontWeight="bold"
          >
            {equipment.heading}
          </Text>
        </Tooltip>
        <Box paddingLeft="1rem" paddingBottom="10px" paddingRight="0.5rem">
          <Flex>
            <Text color="#949494" fontSize="16px" flex="1.5">
              <IoLocationOutline size="1.5rem" />
              {/* {equipment.location} */}
            </Text>
            <Text color="#949494" fontSize="16px" flex="1">
              {/* <TimeIcon marginRight="8px" /> */}
              {/* {equipment.time} */}
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
