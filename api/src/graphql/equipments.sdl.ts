export const schema = gql`
  type Equipment {
    id: Int!
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  type Query {
    equipments: [Equipment!]! @skipAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  input UpdateEquipmentInput {
    heading: String
    price: Int
    image_url: String
    location: String
    time: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`
