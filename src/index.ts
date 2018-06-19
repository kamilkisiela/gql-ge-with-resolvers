import { ApolloServer } from 'apollo-server';
import typeDefs from './types';
import resolvers from './resolvers';

// TODO: IResolverObject<any, any> of `graphql-tools` is screaming here
// since IResolverObject is { [key: string]: IResolver }
// it's incompatible
// with { Query: any, Mutation: any }
// because of no index signature
const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
