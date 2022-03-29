const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const path = require("path");

const { typeDefs, resolvers } = require("./schema/index");

const PORT = 8000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startApollo = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `server running on port ${PORT}, but FULL APP at http://localhost:3000`
      );
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApollo(typeDefs, resolvers);
