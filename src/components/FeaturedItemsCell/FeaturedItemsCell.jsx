import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react'
import EquipementCard from '../EquipmentCard/EquipementCard';

export const FeaturedItemsCell = ({ equipments }) => {
  return (
    <Box height="80vh" width="90%" ml={'5rem'}>
      <Box
        height="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="88%">
          <Text
            color="#064789"
            fontSize="32px"
            fontWeight="500"
            alignItems="flex-start"
            pb="1rem"
          >
            Featured Items
          </Text>
        </Box>

        <Flex>
          <Flex
            overflowX="hidden"
            height="350px"
            width="1100px"
            paddingLeft="2px"
          >
            {equipments.map((item) => {
              return <EquipementCard equipment={item} key="item" />
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
