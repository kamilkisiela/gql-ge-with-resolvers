import { QueryResolvers, Hero } from '../models';

const heroes: Array<Hero> = [
  { id: 0, name: 'Batman' },
  { id: 1, name: 'Superman' },
];

export const Query: QueryResolvers.Resolvers = {
  allHeroes: () => heroes,
  hero: (_, { id }) => heroes.find(hero => hero.id === id),
};
