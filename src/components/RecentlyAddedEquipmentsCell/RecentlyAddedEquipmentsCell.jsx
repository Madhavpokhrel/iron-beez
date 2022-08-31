import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import EquipementCard from '../EquipmentCard/EquipementCard';
import axios from 'axios';
import RecentlyBg from '../../assets/Image/RecentlyBg.jpg';

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;

  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export const RecentlyAddedEquipmentsCell = () => {
  const contentWrapper = useRef(null);
  const [recentlyAddedEquipment, setRecentlyAddedEquipment] = useState([]);
  const MARKETPLACE_API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;

  useEffect(() => {
    const start = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    const price = Math.floor(Math.random() * (30000 - 1000 + 1) + 1000);
    console.log('start =>', start);

    const fetchRecentlyAddedEquipmentApi = async () => {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?price_range=${price}&start=${start}&rows=10&api_key=${MARKETPLACE_API_KEY}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setRecentlyAddedEquipment(result.data.listings);
    };
    fetchRecentlyAddedEquipmentApi();
  }, []);

  return (
    <Box height="100vh">
      <Center
        height="100%"
        bgImage={RecentlyBg}
        flexDir="column"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Box width="79%">
          <Text
            color="#064789"
            fontSize="32px"
            fontWeight="500"
            alignItems="flex-start"
            pb="1rem"
            pt="7rem"
          >
            Recently Added
          </Text>
        </Box>
        <Flex width={'100%'} justify='center'>
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
              color="black"
            />
          </Box>
          <Flex
            overflowX="hidden"
            height="350px"
            width="1100px"
            ref={contentWrapper}
            paddingLeft="10px"
          >
            {recentlyAddedEquipment.map(item => {
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
              color="black"
            />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};
