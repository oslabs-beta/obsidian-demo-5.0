import { gql } from '../deps.ts';

const types = qql`
  enum PlantMaintenance{
    LOW
    MEDIUM
    HIGH
  }
  enum PlantSize{
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
    country_id: ID!
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
    countries(input: CountryInput): [Country]!
  }

  type Mutation {
    addPlant(input: AddPlant!): Plant!
    deletePlant(id: ID!): Plant!
    addCountry(input: AddCountry!): Country! 
  }
`;

export default types;