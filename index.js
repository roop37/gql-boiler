//Entry Point to Our API
//We will set up the api withoutexpresss so it will be bit different
//We first import sme stuff from apollo server library
//This is not a express gql code

const { ApolloServer } = require("apollo-server");

// ApolloServer Server class will take in 2 information - typeDefinations and  some bunch of resolvers
//TypeDefs - Every Piece of data ,Every type we define,Every query we define in GQL will be inside of the Typedefs

//Resolvers-All of those functions those resolve those types and do stuff like make calls to apis,Make calls to Databases,Send data back--All the functions will be enclosed inside of a variable we will call that resolvers{Resolvers - ARE JUST FUNCTIONS THAT DEAL WITH THE DATA}

// const server = new ApolloServer({ typeDefs, resolvers });

const server = new ApolloServer({ typeDefs, resolvers });

//Make server to listen and when server finishes listening,this returns an promise,After the server is actually running we console log an server running msshg

// server.listen().then(() => {
//   console.log("Server Has Started :)");
// });

//We can grab the url and destructure it over the function after the listening of the Server

server.listen().then(({ url }) => {
  console.log(`Server Has Started at: ${url}`);
});
