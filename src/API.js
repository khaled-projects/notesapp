/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {|
  id?: ?string,
  name: string,
  description?: ?string,
|};

export type ModelTodoConditionInput = {|
  name?: ?ModelStringInput,
  description?: ?ModelStringInput,
  and?: ?Array< ?ModelTodoConditionInput >,
  or?: ?Array< ?ModelTodoConditionInput >,
  not?: ?ModelTodoConditionInput,
  createdAt?: ?ModelStringInput,
  updatedAt?: ?ModelStringInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type UpdateTodoInput = {|
  id: string,
  name?: ?string,
  description?: ?string,
|};

export type DeleteTodoInput = {|
  id: string,
|};

export type ModelTodoFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  description?: ?ModelStringInput,
  createdAt?: ?ModelStringInput,
  updatedAt?: ?ModelStringInput,
  and?: ?Array< ?ModelTodoFilterInput >,
  or?: ?Array< ?ModelTodoFilterInput >,
  not?: ?ModelTodoFilterInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelSubscriptionTodoFilterInput = {|
  id?: ?ModelSubscriptionIDInput,
  name?: ?ModelSubscriptionStringInput,
  description?: ?ModelSubscriptionStringInput,
  createdAt?: ?ModelSubscriptionStringInput,
  updatedAt?: ?ModelSubscriptionStringInput,
  and?: ?Array< ?ModelSubscriptionTodoFilterInput >,
  or?: ?Array< ?ModelSubscriptionTodoFilterInput >,
|};

export type ModelSubscriptionIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  in?: ?Array< ?string >,
  notIn?: ?Array< ?string >,
|};

export type ModelSubscriptionStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  in?: ?Array< ?string >,
  notIn?: ?Array< ?string >,
|};

export type CreateTodoMutationVariables = {|
  input: CreateTodoInput,
  condition?: ?ModelTodoConditionInput,
|};

export type CreateTodoMutation = {|
  createTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateTodoMutationVariables = {|
  input: UpdateTodoInput,
  condition?: ?ModelTodoConditionInput,
|};

export type UpdateTodoMutation = {|
  updateTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteTodoMutationVariables = {|
  input: DeleteTodoInput,
  condition?: ?ModelTodoConditionInput,
|};

export type DeleteTodoMutation = {|
  deleteTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetTodoQueryVariables = {|
  id: string,
|};

export type GetTodoQuery = {|
  getTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListTodosQueryVariables = {|
  filter?: ?ModelTodoFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListTodosQuery = {|
  listTodos: ? {|
    __typename: "ModelTodoConnection",
    items:  Array<? {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateTodoSubscriptionVariables = {|
  filter?: ?ModelSubscriptionTodoFilterInput,
|};

export type OnCreateTodoSubscription = {|
  onCreateTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateTodoSubscriptionVariables = {|
  filter?: ?ModelSubscriptionTodoFilterInput,
|};

export type OnUpdateTodoSubscription = {|
  onUpdateTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteTodoSubscriptionVariables = {|
  filter?: ?ModelSubscriptionTodoFilterInput,
|};

export type OnDeleteTodoSubscription = {|
  onDeleteTodo: ? {|
    __typename: "Todo",
    id: string,
    name: string,
    description: ?string,
    createdAt: any,
    updatedAt: any,
  |},
|};