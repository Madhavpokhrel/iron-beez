import {
  Image,
  Box,
  Flex,
  Text,
  HStack,
  Tooltip,
  Stack,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';

const EquipementCard = props => {
  return (
    <>
      <Stack boxShadow="md" p="10px" m="5px" borderRadius="7px" bgColor="white">
        <Box boxSize={'230px'}>
          <Image
            size="28rem"
            src={props.item.media.photo_links[0]}
            alt={props.item.heading}
          />
        </Box>
        <Tooltip
          label="2021 Felco 211-50 qqqqq www  eee e rrrrr rr"
          aria-label="A tooltip"
        >
          <Text noOfLines={1} p="5px" pl="10px" fontWeight="bold">
            {props.item.heading}
          </Text>
        </Tooltip>
        <Box>
          <Flex justifyContent="space-between" pb="10px" pl="5px">
            <Flex color="#949494" fontSize="16px" flex="1.5">
              <MdLocationOn size="1.5rem" />
              {props.item.dealer.street}
            </Flex>
            <Text color="#949494" fontSize="16px" flex="1">
              {props.item.dealer.msa_code}
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
              Price
            </Text>
            <Text fontWeight="500" fontSize="20px" color="#F6A91F" flex="1">
              {props.item.price}
            </Text>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default EquipementCard;
