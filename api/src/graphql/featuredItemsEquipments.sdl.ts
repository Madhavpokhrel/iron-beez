export const schema = gql`
  type FeaturedItemsEquipment {
    id: Int!
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  type Query {
    featuredItemsEquipments: [FeaturedItemsEquipment!]! @requireAuth
    featuredItemsEquipment(id: Int!): FeaturedItemsEquipment @requireAuth
  }

  input CreateFeaturedItemsEquipmentInput {
    heading: String!
    price: Int!
    image_url: String!
    location: String!
    time: String!
  }

  input UpdateFeaturedItemsEquipmentInput {
    heading: String
    price: Int
    image_url: String
    location: String
    time: String
  }

  type Mutation {
    createFeaturedItemsEquipment(
      input: CreateFeaturedItemsEquipmentInput!
    ): FeaturedItemsEquipment! @requireAuth
    updateFeaturedItemsEquipment(
      id: Int!
      input: UpdateFeaturedItemsEquipmentInput!
    ): FeaturedItemsEquipment! @requireAuth
    deleteFeaturedItemsEquipment(id: Int!): FeaturedItemsEquipment! @requireAuth
  }
`
