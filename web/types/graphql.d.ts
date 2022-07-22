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

export type CreateEquipmentInput = {
  heading: Scalars['String'];
  image_url: Scalars['String'];
  price: Scalars['Int'];
};

export type Equipment = {
  __typename?: 'Equipment';
  heading: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  price: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEquipment: Equipment;
  deleteEquipment: Equipment;
  updateEquipment: Equipment;
};


export type MutationcreateEquipmentArgs = {
  input: CreateEquipmentInput;
};


export type MutationdeleteEquipmentArgs = {
  id: Scalars['Int'];
};


export type MutationupdateEquipmentArgs = {
  id: Scalars['Int'];
  input: UpdateEquipmentInput;
};

export type Query = {
  __typename?: 'Query';
  equipment?: Maybe<Equipment>;
  equipments: Array<Equipment>;
  redwood?: Maybe<Redwood>;
};


export type QueryequipmentArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateEquipmentInput = {
  heading?: InputMaybe<Scalars['String']>;
  image_url?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

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


export type FindEquipmentById = { __typename?: 'Query', equipment?: { __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string } | null };

export type FindEquipmentsVariables = Exact<{ [key: string]: never; }>;


export type FindEquipments = { __typename?: 'Query', equipments: Array<{ __typename?: 'Equipment', id: number, heading: string, price: number, image_url: string }> };

export type CreateEquipmentMutationVariables = Exact<{
  input: CreateEquipmentInput;
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment: { __typename?: 'Equipment', id: number } };
