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
        <Box paddingLeft={'3rem'}>
          <Link to={routes.home()}>
            <Image src={logo} width="170px" height={'30px'} />
          </Link>
        </Box>
        <HStack marginRight={'3rem'}>
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
            width={'170px'}
          >
            Signup
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
