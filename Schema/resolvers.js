//We can start by cretaing a object named resolvers which we will pass to index.js.It will contIN ALL OF THE FUNCTIONS that will exist in our API.

const { UserList } = require("../FakeData.js");

//All of the functions that make call to database,the functions that decide what we return to the frontend,All the function that actually do something in our api will exist inside of single resolvers object
const resolvers = {
  // Inside of the Query type we define all the resolver functions that will exist as a subfield for the query type
  // We should always define the highest level field first like Query inside of our object
  Query: {
    //We can create a function that will return all of the users in our database
    users() {
      // Inside it we will write all the js script necessary to tell graphql what we want to return
      // If we have a database,This is where we call the database for all the users
      return UserList;
    },
  },
};

module.exports = { resolvers };
