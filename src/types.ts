import { gql } from 'apollo-server';

export default gql`
  type Hero {
    id: Int!
    name: String!
  }

  type Query {
    allHeroes(first: Int): [Hero]
    hero(id: Int!): Hero
  }

  type Mutation {
    addHero(name: String!): Hero
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
