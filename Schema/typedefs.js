//gql from apollo server hels in writing pure graphql code and its going to automatically translate that code into something js understand

const { gql } = require("apollo-server");

//Every GQL Scheema starts with 1 specific type that is Query so we push type Query inside the gql

const typeDefs = gql`
  # So Inorder for us to have data about Users we have to create a type called user

  #GQL by Default has a basic type called id similar to String,Int other basic types
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  # this type over here will hold as fields all the queries we wanna make inside of our api.
  # So the Query type is the first level of out graph
  # This is where you will define Queries that will be in the frontend

  type Query {
    # Suppose in one of our req we wanna grab list of users so we will define a query as users that returns array of users
    # Once you define the type user we can start creating queries that deal with type user

    users: [User]!
    # friends:

    # We have to create a resolver that is going to resolve the user field
  }
`;

module.exports = { typeDefs };
