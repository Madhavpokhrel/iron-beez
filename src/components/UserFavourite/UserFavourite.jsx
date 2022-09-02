import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import EquipementCard from '../EquipmentCard/EquipementCard';
import { sideScroll } from '../RecommendationsCell/RecommendationsCell';
function UserFavourite() {
  const contentWrapper = useRef(null);
  const [recomended, setRecomended] = useState([]);
  const MARKETPLACE_API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;

  useEffect(() => {
    const start = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    console.log('start =>', start);
    const fetchRecommendedApi = async () => {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?price_range=1000-30000&start=${start}&rows=10&api_key=${MARKETPLACE_API_KEY}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setRecomended(result.data.listings);
    };
    fetchRecommendedApi();
  }, []);

  return (
    <div>
      <Flex align="center">
        <Text
          color="#064789"
          fontSize="32px"
          fontWeight="500"
          alignItems="flex-start"
          pb="1rem"
        >
          Favourites
        </Text>
        <Box mb={2} ml={2}>
          <AiFillHeart color="#064789" size={'35px'} />
        </Box>
      </Flex>

      <Flex width={'100%'} justify="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="1rem"
        >
          <IoIosArrowDropleftCircle
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, -10);
            }}
            cursor="pointer"
            size="3rem"
            color="#4C956C"
          />
        </Box>
        <Flex
          overflowX="hidden"
          height="350px"
          width="1100px"
          ref={contentWrapper}
          paddingLeft="10px"
        >
          {recomended.map(item => {
            return <EquipementCard key={item.id} item={item} />;
          })}
        </Flex>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="1rem"
        >
          <IoIosArrowDroprightCircle
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, 10);
            }}
            cursor="pointer"
            size="3rem"
            color="#4C956C"
          />
        </Box>
      </Flex>
      <Center pt="1rem" pb="4rem">
        <IoIosArrowDropleftCircle
          cursor="pointer"
          size="3rem"
          color="#4C956C"
        />
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          ml="10px"
          p="10px"
        >
          1
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          2
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          3
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          4
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          5
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          6
        </Button>
        <Button
          rounded="full"
          border="2px"
          borderColor="#D68C45"
          color="#D68C45"
          _hover={{ bgColor: 'none' }}
          _focus={{ color: 'white', bgColor: '#D68C45' }}
          mr="10px"
          p="10px"
        >
          7
        </Button>
        <IoIosArrowDroprightCircle
          // onClick={() => {
          //   sideScroll(contentWrapper.current, 25, 100, 10)
          // }}
          cursor="pointer"
          size="3rem"
          color="#4C956C"
        />
      </Center>
    </div>
  );
}

export default UserFavourite;
