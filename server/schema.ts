import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts";

const types = gql`
  enum PlantMaintenance {
    LOW
    MEDIUM
    HIGH
  }
	
  enum PlantSize {
    SMALL
    MEDIUM
    LARGE
  }
  enum ClimateType {
    TROPICAL
    DRY
    TEMPERATE
    CONTINENTAL
    POLA
  }
  type Plant {
    id: ID!
    country: Country
    name: String!
    maintenance: String!
    size: String!
    imageurl: String!
  }
  type Country {
    id: ID
		plant: Plant
    name: String
    climate: String
  }
  input PlantInput {
    maintenance: String
    size: String
  }
  input CountryInput {
    climate: String!
  }
  input AddPlant {
    name: String!
    maintenance: String!
    size: String!
    imageurl: String!
  }
  input AddCountry {
    name: String!
    climate: String!
  }
  type Query {
    plants(input: PlantInput): [Plant]!
    countries(input: CountryInput): [Country]!
  }
  type Mutation {
    addPlant(input: AddPlant!): Plant
    deletePlant(id: ID!): Plant!
    addCountry(input: AddCountry!): Country!
  }
`;

export default types;
