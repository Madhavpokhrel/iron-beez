import React, { useState } from 'react'

import {
  Center,
  Flex,
  Text,
  Box,
  Image,
  Select,
  Grid,
  Switch,
  Button,
} from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io'
import type { FindEquipments } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Vector from 'src/images/Vector.png'

import EquipementCard from '../EquipementCard/EquipementCard'
import MapContainer from '../MapContainer/MapContainer'
import ProductsNavBar from '../ProductsNavBar/ProductsNavBar'

export const QUERY = gql`
  query FindEquipments {
    equipments {
      id
      heading
      price
      image_url
      location
      time
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindEquipments>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ equipments }: CellSuccessProps<FindEquipments>) => {
  const [toggleLocation, setToggleLocation] = useState(false)
  const [toggleFilters, setToggleFilters] = useState(true)

  const locationToggler = () => {
    // toggle ? setToggle(false) : setToggle(true)
    setToggleLocation(!toggleLocation)
  }
  const filtersToggler = () => {
    setToggleFilters(!toggleFilters)
  }
  return (
    <>
      <Box bgColor="#EFEFEF">
        {toggleLocation ? (
          <Flex>
            <Box>
              <MapContainer />
            </Box>
            <Box>
              <Center>
                <Flex mt="1rem" width="90%" justifyContent="space-between">
                  <Flex color="#949494">
                    <Center fontWeight="500">
                      Show Location{' '}
                      <Flex ml="5px">
                        <Switch onChange={locationToggler} />
                      </Flex>
                    </Center>
                    <Center ml="1rem" fontWeight="500">
                      Results:12
                    </Center>
                  </Flex>
                  <Center>
                    <Image cursor="pointer" src={Vector} height="20px"></Image>
                  </Center>
                </Flex>
              </Center>
              <Center>
                <Flex width="90%" justifyContent="space-between">
                  <Flex alignItems="center">
                    <Text
                      color="#064789"
                      fontSize="20px"
                      fontWeight="500"
                      mr="10px"
                    >
                      Filters
                    </Text>
                    <BsFilter
                      onChange={filtersToggler}
                      cursor="pointer"
                      color="#4C956C"
                      size="2rem"
                    />
                  </Flex>
                  <Flex alignItems="center">
                    <Text
                      color="#064789"
                      fontSize="20px"
                      fontWeight="500"
                      mr="10px"
                    >
                      SortBy
                    </Text>
                    <Select color="#949494" placeholder="Newest" size="md">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
              </Center>
              <Center pt="1rem" pb="1rem">
                <Grid width="90%" templateColumns="repeat(2, 3fr)" gap={0}>
                  {equipments.map((item) => {
                    return <EquipementCard equipment={item} key="products" />
                  })}
                </Grid>
              </Center>
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
            </Box>
          </Flex>
        ) : toggleFilters ? (
          <Box>
            <Center>
              <Flex
                width="90%"
                justifyContent="space-between"
                mt="1rem"
                mb="1rem"
              >
                <Flex color="#949494">
                  <Center fontWeight="500">
                    Show Location{' '}
                    <Flex ml="5px">
                      <Switch onChange={locationToggler} />
                    </Flex>
                  </Center>
                  <Center ml="1rem" fontWeight="500">
                    Results:12
                  </Center>
                </Flex>
                <Center>
                  <Image cursor="pointer" src={Vector} height="20px"></Image>
                </Center>
              </Flex>
            </Center>
            <Center>
              <Flex width="90%" justifyContent="space-between">
                <Flex alignItems="center">
                  <Text
                    color="#064789"
                    fontSize="20px"
                    fontWeight="500"
                    mr="10px"
                  >
                    Filters
                  </Text>
                  <BsFilter
                    onClick={filtersToggler}
                    cursor="pointer"
                    color="#4C956C"
                    size="2rem"
                  />
                </Flex>
                <Flex alignItems="center">
                  <Text
                    color="#064789"
                    fontSize="20px"
                    fontWeight="500"
                    mr="10px"
                  >
                    SortBy
                  </Text>
                  <Select color="#949494" placeholder="Newest" size="md">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Flex>
              </Flex>
            </Center>
            <Center pt="1rem" pb="1rem">
              <Grid width="90%" templateColumns="repeat(4, 3fr)" gap={0}>
                {equipments.map((item) => {
                  return <EquipementCard equipment={item} key="item" />
                })}
              </Grid>
            </Center>
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
          </Box>
        ) : (
          <Flex>
            <Box mt="10px">
              <ProductsNavBar />
            </Box>
            <Box bgColor="#EFEFEF">
              <Center>
                <Flex
                  width="90%"
                  justifyContent="space-between"
                  mt="1rem"
                  mb="1rem"
                >
                  <Flex color="#949494">
                    <Center fontWeight="500">
                      Show Location{' '}
                      <Flex ml="5px">
                        <Switch />
                      </Flex>
                    </Center>
                    <Center ml="1rem" fontWeight="500">
                      Results:12
                    </Center>
                  </Flex>
                  <Center>
                    <Image cursor="pointer" src={Vector} height="20px"></Image>
                  </Center>
                </Flex>
              </Center>
              <Center>
                <Flex width="90%" justifyContent="space-between">
                  <Flex alignItems="center">
                    <Text
                      color="#064789"
                      fontSize="20px"
                      fontWeight="500"
                      mr="10px"
                    >
                      Filters
                    </Text>
                    <BsFilter
                      onClick={filtersToggler}
                      cursor="pointer"
                      color="#4C956C"
                      size="2rem"
                    />
                  </Flex>
                  <Flex alignItems="center">
                    <Text
                      color="#064789"
                      fontSize="20px"
                      fontWeight="500"
                      mr="10px"
                    >
                      SortBy
                    </Text>
                    <Select color="#949494" placeholder="Newest" size="md">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
              </Center>
              <Center pt="1rem" pb="1rem">
                <Grid width="90%" templateColumns="repeat(3, 3fr)" gap={0}>
                  {equipments.map((item) => {
                    return <EquipementCard equipment={item} key="item" />
                  })}
                </Grid>
              </Center>
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
            </Box>
          </Flex>
        )}
      </Box>
    </>
  )
}
