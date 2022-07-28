export const schema = gql`
  type Article {
    id: Int!
    imageUrl: String!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    articles: [Article!]! @skipAuth
    article(id: Int!): Article @requireAuth
  }

  input CreateArticleInput {
    imageUrl: String!
    title: String!
    body: String!
  }

  input UpdateArticleInput {
    imageUrl: String
    title: String
    body: String
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article! @requireAuth
    updateArticle(id: Int!, input: UpdateArticleInput!): Article! @requireAuth
    deleteArticle(id: Int!): Article! @requireAuth
  }
`
