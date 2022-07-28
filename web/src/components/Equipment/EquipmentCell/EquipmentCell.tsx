import type { FindEquipmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Equipment from 'src/components/Equipment/Equipment'

export const QUERY = gql`
  query FindEquipmentById($id: Int!) {
    equipment: equipment(id: $id) {
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

export const Empty = () => <div>Equipment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ equipment }: CellSuccessProps<FindEquipmentById>) => {
  return <Equipment equipment={equipment} />
}
