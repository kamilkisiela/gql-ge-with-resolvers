import { makeExecutableSchema } from 'apollo-server';
import types from './types';

export default makeExecutableSchema({
  typeDefs: [types],
});
