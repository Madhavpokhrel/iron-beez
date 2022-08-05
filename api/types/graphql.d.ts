import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as PrismaUser, Equipment as PrismaEquipment, Article as PrismaArticle, RecentlyAddedEquipment as PrismaRecentlyAddedEquipment, FeaturedItemsEquipment as PrismaFeaturedItemsEquipment, Prisma } from '.prisma/client';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => Promise<Partial<TResult>> | Partial<TResult>;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type CreateArticleInput = {
  body: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type CreateEquipmentInput = {
  heading: Scalars['String'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type CreateFeaturedItemsEquipmentInput = {
  heading: Scalars['String'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type CreateRecentlyAddedEquipmentInput = {
  heading: Scalars['String'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type Equipment = {
  __typename?: 'Equipment';
  heading: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type FeaturedItemsEquipment = {
  __typename?: 'FeaturedItemsEquipment';
  heading: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createEquipment: Equipment;
  createFeaturedItemsEquipment: FeaturedItemsEquipment;
  createRecentlyAddedEquipment: RecentlyAddedEquipment;
  deleteArticle: Article;
  deleteEquipment: Equipment;
  deleteFeaturedItemsEquipment: FeaturedItemsEquipment;
  deleteRecentlyAddedEquipment: RecentlyAddedEquipment;
  updateArticle: Article;
  updateEquipment: Equipment;
  updateFeaturedItemsEquipment: FeaturedItemsEquipment;
  updateRecentlyAddedEquipment: RecentlyAddedEquipment;
};


export type MutationcreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationcreateEquipmentArgs = {
  input: CreateEquipmentInput;
};


export type MutationcreateFeaturedItemsEquipmentArgs = {
  input: CreateFeaturedItemsEquipmentInput;
};


export type MutationcreateRecentlyAddedEquipmentArgs = {
  input: CreateRecentlyAddedEquipmentInput;
};


export type MutationdeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteEquipmentArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteFeaturedItemsEquipmentArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteRecentlyAddedEquipmentArgs = {
  id: Scalars['Int'];
};


export type MutationupdateArticleArgs = {
  id: Scalars['Int'];
  input: UpdateArticleInput;
};


export type MutationupdateEquipmentArgs = {
  id: Scalars['Int'];
  input: UpdateEquipmentInput;
};


export type MutationupdateFeaturedItemsEquipmentArgs = {
  id: Scalars['Int'];
  input: UpdateFeaturedItemsEquipmentInput;
};


export type MutationupdateRecentlyAddedEquipmentArgs = {
  id: Scalars['Int'];
  input: UpdateRecentlyAddedEquipmentInput;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Article>;
  equipment?: Maybe<Equipment>;
  equipments: Array<Equipment>;
  featuredItemsEquipment?: Maybe<FeaturedItemsEquipment>;
  featuredItemsEquipments: Array<FeaturedItemsEquipment>;
  recentlyAddedEquipment?: Maybe<RecentlyAddedEquipment>;
  recentlyAddedEquipments: Array<RecentlyAddedEquipment>;
  redwood?: Maybe<Redwood>;
};


export type QueryarticleArgs = {
  id: Scalars['Int'];
};


export type QueryequipmentArgs = {
  id: Scalars['Int'];
};


export type QueryfeaturedItemsEquipmentArgs = {
  id: Scalars['Int'];
};


export type QueryrecentlyAddedEquipmentArgs = {
  id: Scalars['Int'];
};

export type RecentlyAddedEquipment = {
  __typename?: 'RecentlyAddedEquipment';
  heading: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateArticleInput = {
  body?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateEquipmentInput = {
  heading?: InputMaybe<Scalars['String']>;
  image_url?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};

export type UpdateFeaturedItemsEquipmentInput = {
  heading?: InputMaybe<Scalars['String']>;
  image_url?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};

export type UpdateRecentlyAddedEquipmentInput = {
  heading?: InputMaybe<Scalars['String']>;
  image_url?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<PrismaArticle>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateArticleInput: CreateArticleInput;
  CreateEquipmentInput: CreateEquipmentInput;
  CreateFeaturedItemsEquipmentInput: CreateFeaturedItemsEquipmentInput;
  CreateRecentlyAddedEquipmentInput: CreateRecentlyAddedEquipmentInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Equipment: ResolverTypeWrapper<PrismaEquipment>;
  FeaturedItemsEquipment: ResolverTypeWrapper<PrismaFeaturedItemsEquipment>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Prisma>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RecentlyAddedEquipment: ResolverTypeWrapper<PrismaRecentlyAddedEquipment>;
  Redwood: ResolverTypeWrapper<Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversTypes['JSON']> }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateArticleInput: UpdateArticleInput;
  UpdateEquipmentInput: UpdateEquipmentInput;
  UpdateFeaturedItemsEquipmentInput: UpdateFeaturedItemsEquipmentInput;
  UpdateRecentlyAddedEquipmentInput: UpdateRecentlyAddedEquipmentInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: PrismaArticle;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateArticleInput: CreateArticleInput;
  CreateEquipmentInput: CreateEquipmentInput;
  CreateFeaturedItemsEquipmentInput: CreateFeaturedItemsEquipmentInput;
  CreateRecentlyAddedEquipmentInput: CreateRecentlyAddedEquipmentInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Equipment: PrismaEquipment;
  FeaturedItemsEquipment: PrismaFeaturedItemsEquipment;
  Int: Scalars['Int'];
  JSON: Prisma;
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  RecentlyAddedEquipment: PrismaRecentlyAddedEquipment;
  Redwood: Omit<Redwood, 'currentUser'> & { currentUser?: Maybe<ResolversParentTypes['JSON']> };
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateArticleInput: UpdateArticleInput;
  UpdateEquipmentInput: UpdateEquipmentInput;
  UpdateFeaturedItemsEquipmentInput: UpdateFeaturedItemsEquipmentInput;
  UpdateRecentlyAddedEquipmentInput: UpdateRecentlyAddedEquipmentInput;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ArticleResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EquipmentResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Equipment'] = ResolversParentTypes['Equipment']> = {
  heading?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeaturedItemsEquipmentResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['FeaturedItemsEquipment'] = ResolversParentTypes['FeaturedItemsEquipment']> = {
  heading?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationcreateArticleArgs, 'input'>>;
  createEquipment?: Resolver<ResolversTypes['Equipment'], ParentType, ContextType, RequireFields<MutationcreateEquipmentArgs, 'input'>>;
  createFeaturedItemsEquipment?: Resolver<ResolversTypes['FeaturedItemsEquipment'], ParentType, ContextType, RequireFields<MutationcreateFeaturedItemsEquipmentArgs, 'input'>>;
  createRecentlyAddedEquipment?: Resolver<ResolversTypes['RecentlyAddedEquipment'], ParentType, ContextType, RequireFields<MutationcreateRecentlyAddedEquipmentArgs, 'input'>>;
  deleteArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationdeleteArticleArgs, 'id'>>;
  deleteEquipment?: Resolver<ResolversTypes['Equipment'], ParentType, ContextType, RequireFields<MutationdeleteEquipmentArgs, 'id'>>;
  deleteFeaturedItemsEquipment?: Resolver<ResolversTypes['FeaturedItemsEquipment'], ParentType, ContextType, RequireFields<MutationdeleteFeaturedItemsEquipmentArgs, 'id'>>;
  deleteRecentlyAddedEquipment?: Resolver<ResolversTypes['RecentlyAddedEquipment'], ParentType, ContextType, RequireFields<MutationdeleteRecentlyAddedEquipmentArgs, 'id'>>;
  updateArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationupdateArticleArgs, 'id' | 'input'>>;
  updateEquipment?: Resolver<ResolversTypes['Equipment'], ParentType, ContextType, RequireFields<MutationupdateEquipmentArgs, 'id' | 'input'>>;
  updateFeaturedItemsEquipment?: Resolver<ResolversTypes['FeaturedItemsEquipment'], ParentType, ContextType, RequireFields<MutationupdateFeaturedItemsEquipmentArgs, 'id' | 'input'>>;
  updateRecentlyAddedEquipment?: Resolver<ResolversTypes['RecentlyAddedEquipment'], ParentType, ContextType, RequireFields<MutationupdateRecentlyAddedEquipmentArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryarticleArgs, 'id'>>;
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  equipment?: Resolver<Maybe<ResolversTypes['Equipment']>, ParentType, ContextType, RequireFields<QueryequipmentArgs, 'id'>>;
  equipments?: Resolver<Array<ResolversTypes['Equipment']>, ParentType, ContextType>;
  featuredItemsEquipment?: Resolver<Maybe<ResolversTypes['FeaturedItemsEquipment']>, ParentType, ContextType, RequireFields<QueryfeaturedItemsEquipmentArgs, 'id'>>;
  featuredItemsEquipments?: Resolver<Array<ResolversTypes['FeaturedItemsEquipment']>, ParentType, ContextType>;
  recentlyAddedEquipment?: Resolver<Maybe<ResolversTypes['RecentlyAddedEquipment']>, ParentType, ContextType, RequireFields<QueryrecentlyAddedEquipmentArgs, 'id'>>;
  recentlyAddedEquipments?: Resolver<Array<ResolversTypes['RecentlyAddedEquipment']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RecentlyAddedEquipmentResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['RecentlyAddedEquipment'] = ResolversParentTypes['RecentlyAddedEquipment']> = {
  heading?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  Article?: ArticleResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Equipment?: EquipmentResolvers<ContextType>;
  FeaturedItemsEquipment?: FeaturedItemsEquipmentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecentlyAddedEquipment?: RecentlyAddedEquipmentResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth?: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth?: skipAuthDirectiveResolver<any, any, ContextType>;
};
