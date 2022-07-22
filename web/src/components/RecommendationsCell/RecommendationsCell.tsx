import { useRef } from 'react'

import { Flex, Text, Box } from '@chakra-ui/react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import type { FindEquipments } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EquipementCard from '../EquipementCard/EquipementCard'

export const QUERY = gql`
  query FindEquipments {
    equipments {
      id
      heading
      price
      image_url
    }
  }
`

// export const QUERY = gql`
//   query RecommendationsQuery {
//     equipments {
//       id
//     }
//   }
// `

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

export const Success = ({ equipments }: CellSuccessProps<FindEquipments>) => {
  const contentWrapper = useRef(null)

  return (
    <Box pb="2rem">
      <Text
        color="#064789"
        fontSize="28px"
        fontWeight="500"
        pt="2rem"
        pl="6rem"
        pb="1rem"
      >
        Recommended
      </Text>
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
            color="#4C956C"
          />
        </Box>
        <Flex
          overflowX="hidden"
          height="300px"
          width="1000px"
          ref={contentWrapper}
          paddingLeft="10px"
        >
          {equipments.map((item) => {
            return <EquipementCard equipment={item} key="item" />
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
            color="#4C956C"
          />
        </Box>
      </Flex>
    </Box>
  )
}
