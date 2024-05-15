//We can start by cretaing a object named resolvers which we will pass to index.js.It will contIN ALL OF THE FUNCTIONS that will exist in our API.

const { UserList } = require("../FakeData.js");
//IGNORE LODASH-  JUST FOR SEARCHING OF AN USER IN THE LOCAL DATABASE
const lodash = require("lodash");
//All of the functions that make call to database,the functions that decide what we return to the frontend,All the function that actually do something in our api will exist inside of single resolvers object
const resolvers = {
  // Inside of the Query type we define all the resolver functions that will exist as a subfield for the query type
  // We should always define the highest level field first like Query inside of our object
  Query: {
    //We can create a function that will return all of the users in our database
    users: async () => {
      // Inside it we will write all the js script necessary to tell graphql what we want to return
      // If we have a database,This is where we call the database for all the users
      return UserList;
    },

    ////DEALING WITH ARGUMENTS IN GRAPHQL
    ////PARENT GIVES YOU THE VALUE THAT WAS RESOLVED BY A PARENT IN THE CHAIN OF TYPES
    ////ARGS IS AN OBJECT THAT CONTAINS WHATEVER DATA USER SENDS/PASSES AS AN ARGUMENT TO THE QUERY
    ////WE CAN ACCESS THE ARGS AS args.id
    // user: async (parent,args) => {        args.id},
    user: async (_, args) => {
      const id = args.id;
      const user = lodash.find(UserList, { id: Number(id) });
      return user;
    },
  },
};

module.exports = { resolvers };
