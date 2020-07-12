import path from "path";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";

const resolversArray = fileLoader(
  path.join(__dirname, "../modules/**/resolvers/*.js"),
  {
    extensions: [".js"],
  }
);
const resolversWithoutTest = fileLoader(
  path.join(__dirname, "../modules/**/resolvers/**/!(__tests__)/*.js"),
  { extensions: [".js"] }
);

const resolvers = resolversArray.concat(resolversWithoutTest);

export default mergeResolvers(resolvers);
