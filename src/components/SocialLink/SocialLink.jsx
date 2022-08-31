import React from 'react';
import { Box, HStack, Text, Link, Center, Img } from '@chakra-ui/react';

import Email from '../../assets/Image/email.png';
import Facebook from '../../assets/Image/facebook.png';
import Instagram from '../../assets/Image/instagram.png';
import Post from '../../assets/Image/post.png';
import Twitter from '../../assets/Image/twitter.png';

const SocialLink = () => {
  return (
    <div>
      <Center>
        <Box>
          <Text
            textColor={'#525252'}
            fontWeight={'600'}
            fontSize={{ base: '13px', sm: '15px', md: '18px', lg: '18px' }}
            mb={3}
          >
            Share item on social media
          </Text>
          <HStack justifyContent={'space-between'}>
            <Link>
              <Img
                src={Twitter}
                alt={'twitter'}
                w={{ base: '5', sm: '6', md: '7', lg: '7' }}
                h={{ base: '4', sm: '5', md: '6', lg: '6' }}
              />
            </Link>
            <Link>
              <Img
                src={Email}
                alt={'email'}
                w={{ base: '5', sm: '6', md: '7', lg: '7' }}
                h={{ base: '4', sm: '5', md: '6', lg: '6' }}
              />
            </Link>
            <Link>
              <Img
                src={Facebook}
                alt={'facebook'}
                w={{ base: '5', sm: '6', md: '7', lg: '7' }}
                h={{ base: '4', sm: '5', md: '6', lg: '6' }}
              />
            </Link>
            <Link>
              <Img
                src={Instagram}
                alt={'instragram'}
                w={{ base: '5', sm: '6', md: '7', lg: '7' }}
                h={{ base: '4', sm: '5', md: '6', lg: '6' }}
              />
            </Link>
            <Link>
              <Img
                src={Post}
                alt={'post'}
                w={{ base: '5', sm: '6', md: '7', lg: '7' }}
                h={{ base: '4', sm: '5', md: '6', lg: '6' }}
              />
            </Link>
          </HStack>
        </Box>
      </Center>
    </div>
  );
};

export default SocialLink;
