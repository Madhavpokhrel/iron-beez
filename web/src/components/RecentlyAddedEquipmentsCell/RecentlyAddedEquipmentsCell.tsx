import { useRef } from 'react'

import { Flex, Text, Box, Center } from '@chakra-ui/react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import type { RecentlyAddedEquipmentsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EquipementCard from '../EquipementCard/EquipementCard'

export const QUERY = gql`
  query RecentlyAddedEquipmentsQuery {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0

  const slideTimer = setInterval(() => {
    element.scrollLeft += step
    scrollAmount += Math.abs(step)
    if (scrollAmount >= distance) {
      clearInterval(slideTimer)
    }
  }, speed)
}

export const Success = ({
  equipments,
}: CellSuccessProps<RecentlyAddedEquipmentsQuery>) => {
  const contentWrapper = useRef(null)
  return (
    <Box height="100vh">
      <Center
        height="100%"
        bgImage="url('/RecentlyBg.png')"
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

        <Flex>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p="1rem"
          >
            <IoIosArrowDropleftCircle
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 100, -10)
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
            {equipments.map((item) => {
              return <EquipementCard equipment={item} key="recentItems" />
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
                sideScroll(contentWrapper.current, 25, 100, 10)
              }}
              cursor="pointer"
              size="3rem"
              color="black"
            />
          </Box>
        </Flex>
      </Center>
    </Box>
  )
}
