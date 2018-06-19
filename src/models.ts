/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface Query {
  allHeroes?: (Hero | null)[] | null;
  hero?: Hero | null;
}

export interface Hero {
  id: number;
  name: string;
}

export interface Mutation {
  addHero?: Hero | null;
}

export namespace QueryResolvers {
  export interface Resolvers {
    allHeroes?: AllHeroesResolver;
    hero?: HeroResolver;
  }

  export type AllHeroesResolver = Resolver<
    (Hero | null)[] | null,
    AllHeroesArgs
  >;
  export interface AllHeroesArgs {
    first?: number | null;
  }

  export type HeroResolver = Resolver<Hero | null, HeroArgs>;
  export interface HeroArgs {
    id: number;
  }
}

export namespace HeroResolvers {
  export interface Resolvers {
    id?: IdResolver;
    name?: NameResolver;
  }

  export type IdResolver = Resolver<number>;
  export type NameResolver = Resolver<string>;
}

export namespace MutationResolvers {
  export interface Resolvers {
    addHero?: AddHeroResolver;
  }

  export type AddHeroResolver = Resolver<Hero | null, AddHeroArgs>;
  export interface AddHeroArgs {
    name: string;
  }
}
export interface AllHeroesQueryArgs {
  first?: number | null;
}
export interface HeroQueryArgs {
  id: number;
}
export interface AddHeroMutationArgs {
  name: string;
}
