import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import logo from 'src/Image/Iron-logo.png'

const Header = () => {
  return (
    <Box height={'10vh'}>
      <Flex
        height={'100%'}
        boxShadow="base"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box paddingLeft={'2rem'}>
          <Image src={logo} width="170px" height={'30px'} />
        </Box>
        <HStack marginRight={'2rem'}>
          <Button
            color={'black'}
            _hover={{ bg: 'none' }}
            padding={'0'}
            margin={'0'}
            marginRight="1rem"
            bg={'none'}
            size="sm"
          >
            <Link to={routes.login()}>Login</Link>
          </Button>
          <Button
            _hover={{ bg: '#D68C45' }}
            bg="#D68C45"
            color="white"
            size="sm"
          >
            Signup
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
