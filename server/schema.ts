// import { gql } from '../serverDeps.ts';

// // can anybody tell me if this tag needs the TS any declaration?
// // const types = (gql as any)`
// const types = gql`
//   enum MovieGenre {
//     ACTION
//     SCIFI
//     DRAMA
//     COMEDY
//     ROMANCE
//     ADVENTURE
//   }
//   enum ReleaseYearOrder {
//     ASC
//     DESC
//   }
//   enum RespType {
//     MOVIE
//     ACTOR
//   }

//   union ActorOrMovie = Actor | Movie
  
//   type Movie {
//     id: ID!
//     title: String!
//     releaseYear: Int!
//     actors: [Actor!]!
//     genre: MovieGenre!
//   }
//   type Actor {
//     id: ID!
//     firstName: String!
//     lastName: String!
//     nickname: String
//     movies: [Movie!]!
//   }
//   input MovieInput {
//     genre: MovieGenre
//     order: ReleaseYearOrder
//     actor: ID
//   }
//   input ActorInput {
//     film: ID
//     actor: ID
//   }
//   input NewMovieInput {
//     title: String!
//     releaseYear: Int!
//     genre: MovieGenre!
//   }
//   input NewActorInput {
//     firstName: String!
//     lastName: String!
//     nickname: String
//   }
//   input AssociateActorAndMovieInput {
//     movieId: ID!
//     actorId: ID!
//     respType: RespType!
//   }
//   input UpdateNicknameInput {
//     actorId: ID!
//     nickname: String!
//   }
//   type Query {
//     movies(input: MovieInput): [Movie]!
//     actors(input: ActorInput): [Actor]!
//   }
//   type Mutation {
//     addMovie(input: NewMovieInput!): Movie!
//     deleteMovie(id: ID!): Movie!
//     addActor(input: NewActorInput!): Actor!
//     deleteActor(id: ID!): Actor!
//     associateActorWithMovie(input: AssociateActorAndMovieInput!): ActorOrMovie
//     updateNickname(input: UpdateNicknameInput!): Actor!
//   }
// `;

// export default types;

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
    maintenance: String!
    size: String!
    imgUrl: String!
  }
  type Country {
    id: ID!
		plant: Plant
    name: String!
    climate: String!
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
    imgUrl: String!
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
    addPlant(input: AddPlant!): Plant!
    deletePlant(id: ID!): Plant!
    addCountry(input: AddCountry!): Country!
  }
`;

export default types;
