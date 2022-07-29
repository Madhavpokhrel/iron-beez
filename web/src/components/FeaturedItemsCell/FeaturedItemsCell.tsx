import { Flex, Text, Box } from '@chakra-ui/react'
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

export const Success = ({ equipments }: CellSuccessProps<FindEquipments>) => {
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
