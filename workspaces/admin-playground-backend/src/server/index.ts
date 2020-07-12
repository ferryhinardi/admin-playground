import { ApolloServer } from "apollo-server-express";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import context from "./context";
import schemaDirectives from "./directives";

const opts = {
  typeDefs,
  resolvers,
  context,
  schemaDirectives,
  introspection: true,
  playground: process.env.NODE_ENV !== "production",
};

const server = new ApolloServer(opts);
const app = express();

app.use(
  cors({
    optionsSuccessStatus: 200,
  })
);
app.use((_: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/health", (_, res: Response) => res.sendStatus(200));

server.applyMiddleware({
  app,
  path: "/",
});

export default app;
