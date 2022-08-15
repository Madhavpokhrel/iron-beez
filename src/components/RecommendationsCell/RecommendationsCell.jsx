import React, { useState, useRef, useEffect } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import EquipementCard from '../EquipmentCard/EquipementCard';
import axios from 'axios';

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

export const RecommendationsCell = () => {
  const contentWrapper = useRef(null);
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    const start = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    console.log('start =>', start);
    const fetchRecommendedApi = async () => {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?price_range=1000-30000&start=${start}&rows=10&api_key=OMOV4Xoz9GXONrwlv6dvtvRuJeps33T3`,
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
    <Box height="80vh" width="100%">
      <Box
        height="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="79%">
          <Text
            color="#064789"
            fontSize="32px"
            fontWeight="500"
            alignItems="flex-start"
            pb="1rem"
          >
            Recommended
          </Text>
        </Box>

        <Flex>
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
      </Box>
    </Box>
  );
};
