import { Box, HStack, Text, Link, Center, Img } from '@chakra-ui/react'

import Email from 'src/Image/email.png'
import Facebook from 'src/Image/facebook.png'
import Insta from 'src/Image/Instagram.png'
import Post from 'src/Image/post.png'
import Twitter from 'src/Image/twitter.png'

const SocialLink = () => {
  return (
    <div>
      <Center>
        <Box marginTop={10}>
          <Text textColor={'#525252'} fontWeight={'600'} mb={3}>
            Share item on social media
          </Text>
          <HStack justifyContent={'space-between'}>
            <Link>
              <Img src={Twitter} alt={'twitter'} w={7} h={6} />
            </Link>
            <Link>
              <Img src={Email} alt={'email'} w={7} h={6} />
            </Link>
            <Link>
              <Img src={Facebook} alt={'facebook'} w={7} h={7} />
            </Link>
            <Link>
              <Img src={Insta} alt={'instragram'} w={7} h={6} />
            </Link>
            <Link>
              <Img src={Post} alt={'post'} w={7} h={6} />
            </Link>
          </HStack>
        </Box>
      </Center>
    </div>
  )
}

export default SocialLink
