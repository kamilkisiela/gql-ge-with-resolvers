import { MutationResolvers } from '../models';

export const Mutation: MutationResolvers.Resolvers = {
  addHero: (_, { name }) => ({ id: 2, name }),
};
