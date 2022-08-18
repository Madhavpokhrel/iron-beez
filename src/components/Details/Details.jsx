import React from 'react';
import {
  HStack,
  Image,
  Box,
  Flex,
  Divider,
  Text,
  Stack,
} from '@chakra-ui/react';

import product from '../../assets/Image/product2.png';

const Details = () => {
  return (
    <Flex
      width={'100%'}
      maxHeight={{ base: '400px', sm: '700', md: '300', lg: '350px' }}
      boxShadow={{
        md: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        lg: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
      flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
    >
      <Box
        bg={'white'}
        width={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
      >
        <Image
          src={product}
          alt="Products not shown"
          width={'100%'}
          height={'100%'}
        />
      </Box>
      <Flex
        bg={'#EFEFEF'}
        borderRadius={'0px 6px 6px 0px'}
        flex={1}
        p={{ base: '1', sm: '3', md: '4', lg: '5' }}
        flexDirection="column"
      >
        <Stack>
          <Flex
            justifyContent={'space-between'}
            flex={1}
            fontSize={{ base: '10px', sm: '12px', md: '15px', lg: '18px' }}
          >
            <Text textColor={'#064789'} fontWeight={'700'}>
              LUGONG LG946
            </Text>
            <Text textColor={' #D68C45'} fontWeight={'600'}>
              $22000
            </Text>
          </Flex>
          <Text
            fontWeight={'700'}
            textColor={'#949494'}
            fontSize={{ base: '10px', sm: '12px', md: '15px', lg: '18px' }}
          >
            2020
          </Text>
        </Stack>

        <HStack
          justifyContent={'space-between'}
          fontSize={{ base: '9px', sm: '11px', md: '13px', lg: '15px' }}
        >
          <Text fontWeight={'400'} textColor={'#949494'}>
            Make
          </Text>

          <Text textColor={'#525252'} fontWeight={'600'}>
            CAT
          </Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mt={[1, 1, 2, 3]} mb={[1, 1, 2, 3]} />
        <HStack
          justifyContent={'space-between'}
          fontSize={{ base: '9px', sm: '11px', md: '13px', lg: '15px' }}
        >
          <Text fontWeight={'400'} textColor={'#949494'}>
            Model
          </Text>

          <Text textColor={'#525252'} fontWeight={'600'}>
            2020
          </Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mt={[1, 1, 2, 3]} mb={[1, 1, 2, 3]} />
        <HStack
          justifyContent={'space-between'}
          fontSize={{ base: '9px', sm: '11px', md: '13px', lg: '15px' }}
        >
          <Text fontWeight={'400'} textColor={'#949494'}>
            Hours used
          </Text>

          <Text textColor={'#525252'} fontWeight={'600'}>
            200hrs
          </Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mt={[1, 1, 2, 3]} mb={[1, 1, 2, 3]} />
        <HStack
          justifyContent={'space-between'}
          fontSize={{ base: '9px', sm: '11px', md: '13px', lg: '15px' }}
        >
          <Text fontWeight={'400'} textColor={'#949494'}>
            Inventory type
          </Text>

          <Text textColor={'#525252'} fontWeight={'600'}>
            Semi truck
          </Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mt={[1, 1, 2, 3]} mb={[1, 1, 2, 3]} />
        <HStack
          justifyContent={'space-between'}
          fontSize={{ base: '9px', sm: '11px', md: '13px', lg: '15px' }}
        >
          <Text fontWeight={'400'} textColor={'#949494'}>
            Year
          </Text>

          <Text textColor={'#525252'} fontWeight={'600'}>
            2
          </Text>
        </HStack>
        <Divider borderColor=" #C0C0C0" mt={[1, 1, 2, 3]} mb={[1, 1, 2, 3]} />
      </Flex>
    </Flex>
  );
};

export default Details;
