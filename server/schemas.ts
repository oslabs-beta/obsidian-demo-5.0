import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts";

export const types = gql`
type Plant {
  id: String
  country_id: [Country]
  name: String
  maintenance: String
  size: String
  imgURL: String
}
type Country {
  id: String
  name: String
  climate: String
}
type Query {
  getPlant(id: String): Plant 
  getPlants : [Plant]
  getBase : String
  getCountries : [Country]
}
`;

