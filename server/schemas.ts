import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts";

// export const types = gql`
// type Plant {
//   id: String
//   country_id: [Country]
//   name: String
//   maintenance: String
//   size: String
//   imgURL: String
// }
// type Country {
//   id: String
//   name: String
//   climate: String
// }
// type Query {
//   getPlant(id: String): Plant 
//   getPlants : [Plant]
//   getBase : String
//   getCountries : [Country]
// }
// `;

// import { gql } from '../serverDeps.ts';

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
    POLAR
  }

  type Plant {
    id: ID!
    country: Country
    name: String!
    maintenance: PlantMaintenance!
    size: PlantSize!
    imgUrl: String!
  }

  type Country {
    id: ID!
    name: String!
    climate: Climate!
  }

  input PlantInput {
    maintenance: PlantMaintenance
    size: PlantSize
  }

  input CountryInput {
    climate: ClimateType
  }

  input AddPlant {
    name: String!
    maintenance: PlantMaintenance!
    size: PlantSize!
    imgUrl: String!
  }

  input AddCountry {
    name: String!
    climate: Climate!
  }

  type Query {
    allPlants(input: PlantInput): [Plant]!
    country(input: CountryInput): [Country]!
  }

  type Mutation {
    addPlant(input: AddPlant!): Plant!
    deletePlant(id: ID!): Plant!
    addCountry(input: AddCountry!): Country!
  }
`;

export default types;
