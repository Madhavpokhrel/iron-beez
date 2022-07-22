export const schema = gql`
  type Equipment {
    id: Int!
    heading: String!
    price: Int!
    image_url: String!
  }

  type Query {
    equipments: [Equipment!]! @requireAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    heading: String!
    price: Int!
    image_url: String!
  }

  input UpdateEquipmentInput {
    heading: String
    price: Int
    image_url: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`
