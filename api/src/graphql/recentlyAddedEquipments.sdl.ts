export const schema = gql`
  type RecentlyAddedEquipment {
    id: Int!
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  type Query {
    recentlyAddedEquipments: [RecentlyAddedEquipment!]! @skipAuth
    recentlyAddedEquipment(id: Int!): RecentlyAddedEquipment @requireAuth
  }

  input CreateRecentlyAddedEquipmentInput {
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  input UpdateRecentlyAddedEquipmentInput {
    heading: String
    price: Int
    image_url: String
    location: String
    time: String
  }

  type Mutation {
    createRecentlyAddedEquipment(
      input: CreateRecentlyAddedEquipmentInput!
    ): RecentlyAddedEquipment! @requireAuth
    updateRecentlyAddedEquipment(
      id: Int!
      input: UpdateRecentlyAddedEquipmentInput!
    ): RecentlyAddedEquipment! @requireAuth
    deleteRecentlyAddedEquipment(id: Int!): RecentlyAddedEquipment! @requireAuth
  }
`
