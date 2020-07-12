import { SchemaDirectiveVisitor } from "apollo-server-express";
import { GraphQLField, GraphQLDirective, DirectiveLocation, defaultFieldResolver,  } from "graphql";

class UpperCaseDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName: string) {
    console.log("inside getDirectiveDeclaration", directiveName)
    return new GraphQLDirective({
      name: directiveName,
      locations: [
        DirectiveLocation.FIELD_DEFINITION,
      ],
      args: {}
    });
  }

  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

export default UpperCaseDirective;
