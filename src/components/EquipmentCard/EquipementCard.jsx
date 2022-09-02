import {
  Image,
  Box,
  Flex,
  Text,
  HStack,
  Tooltip,
  Stack,
  theme,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import { useState } from 'react';

const EquipementCard = props => {
  const [toggleFav, setToggleFav] = useState(false);
  const toggleFavourite = () => {
    setToggleFav(!toggleFav);
  };
  
  return (
    <>
      <Stack
        boxShadow="md"
        p="10px"
        m="5px"
        borderRadius="7px"
        minWidth={'250px'}
        bgColor={props.theme == 'dark' ? 'black' : 'white'}
      >
        <Box height={'200px'} position="relative">
          <Image
            src={props.item.media?.photo_links[0]}
            alt={props.item.heading}
            width={'100%'}
            height={'100%'}
          />
          <Box
            position={'absolute'}
            top="0"
            right={0}
            onClick={toggleFavourite}
          >
            {toggleFav ? (
              <AiFillHeart color="#064789" size={'30px'} />
            ) : (
              <AiOutlineHeart color="#064789" size={'30px'} />
            )}
          </Box>
        </Box>
        <Tooltip
          label="2021 Felco 211-50 qqqqq www  eee e rrrrr rr"
          aria-label="A tooltip"
        >
          <Text
            noOfLines={1}
            p="5px"
            pl="10px"
            fontWeight="bold"
            color={props.theme == 'dark' ? '#ffffff' : '#000'}
          >
            {props.item.heading}
          </Text>
        </Tooltip>
        <Box>
          <Flex justifyContent="space-between" pb="10px" pl="5px">
            <Flex
              color={props.theme == 'dark' ? '#ffffff' : '#949494'}
              fontSize="16px"
              flex="1.5"
            >
              <MdLocationOn size="1.5rem" />
              {props.item?.dealer?.street}
            </Flex>
            <Text
              color={props.theme == 'dark' ? '#ffffff' : '#949494'}
              fontSize="16px"
              flex="1"
            >
              {props.item?.dealer?.msa_code}
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
            <Text
              color={props.theme == 'dark' ? '#ffffff' : '#949494'}
              fontSize="20px"
              flex="2"
            >
              Price
            </Text>
            <Text fontWeight="500" fontSize="20px" color="#F6A91F" flex="1">
              {props.item?.price}
            </Text>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default EquipementCard;
