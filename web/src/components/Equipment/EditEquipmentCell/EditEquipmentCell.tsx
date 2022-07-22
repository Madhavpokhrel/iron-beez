import type { EditEquipmentById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EquipmentForm from 'src/components/Equipment/EquipmentForm'

export const QUERY = gql`
  query EditEquipmentById($id: Int!) {
    equipment: equipment(id: $id) {
      id
      heading
      price
      image_url
    }
  }
`
const UPDATE_EQUIPMENT_MUTATION = gql`
  mutation UpdateEquipmentMutation($id: Int!, $input: UpdateEquipmentInput!) {
    updateEquipment(id: $id, input: $input) {
      id
      heading
      price
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ equipment }: CellSuccessProps<EditEquipmentById>) => {
  const [updateEquipment, { loading, error }] = useMutation(UPDATE_EQUIPMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Equipment updated')
      navigate(routes.equipments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateEquipment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Equipment {equipment.id}</h2>
      </header>
      <div className="rw-segment-main">
        <EquipmentForm equipment={equipment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
