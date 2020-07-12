import path from "path";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import UpperCaseDirective from './UpperCaseDirective';

const directivesArray = fileLoader(
  path.join(__dirname, "../../modules/**/directives/*.ts"),
  {
    extensions: [".ts"],
  }
);

const directives = directivesArray.concat([UpperCaseDirective]);

export default mergeResolvers(directives);
