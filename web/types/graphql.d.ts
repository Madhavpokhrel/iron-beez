export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, title: string, body: string, imageUrl: string, createdAt: string }> };

export type EditEquipmentByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditEquipmentById = { __typename?: 'Query', equipment?: { __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string } | null };

export type UpdateEquipmentMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateEquipmentInput;
}>;


export type UpdateEquipmentMutation = { __typename?: 'Mutation', updateEquipment: { __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string } };

export type DeleteEquipmentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteEquipmentMutation = { __typename?: 'Mutation', deleteEquipment: { __typename?: 'Equipment', id: number } };

export type FindEquipmentByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindEquipmentById = { __typename?: 'Query', equipment?: { __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string, location: string, time: string } | null };

export type FindEquipmentsVariables = Exact<{ [key: string]: never; }>;


export type FindEquipments = { __typename?: 'Query', equipments: Array<{ __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string, location: string, time: string }> };

export type CreateEquipmentMutationVariables = Exact<{
  input: CreateEquipmentInput;
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment: { __typename?: 'Equipment', id: number } };

export type RecentlyAddedEquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentlyAddedEquipmentsQuery = { __typename?: 'Query', equipments: Array<{ __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string, location: string, time: string }> };
