import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql", // same as your route
});

export { handleRequest as GET, handleRequest as POST };
