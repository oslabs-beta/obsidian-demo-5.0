import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts";


const plants  = [
  {
    id: '1',
    country_id: [1,3],
    name: 'Rose',
    maintenance: 'Medium',
    size: 'Medium',
    imgURL: 'rose.png'
  },
  {
    id: '2',
    country_id: [1,2],
    name: 'Coleus',
    maintenance: 'Low',
    size: 'Large',
    imgURL: 'coleus.png'
  }, 
  {
    id: '3',
    country_id: [2,3],
    name: 'Ageratum',
    maintenance: 'High',
    size: 'Medium',
    imgURL: 'ageratum.png'
  }
];

const countries  = [
  {
    id: '1',
    name: 'USA',
    climate: 'tropical'
  },
  {
    id: '2',
    name: 'Ukraine',
    climate: 'medium'
  }, 
  {
    id: '3',
    name: 'Canada',
    climate: 'harsh'
  }
];

export const resolvers = {
  Query: {
    getPlant: (parent: any, { id }: any, context: any, info: any) => {
      return plants.map((plant:any)=>plant.id==id);
    },
    getPlants : () => {
      return plants.map(plant=>{
        const {id,name,maintenance, size,imgURL} = plant;
        const countriesArr = countries.filter((count,id) => plant.country_id.indexOf(id) !==-1 );
        const resP = {id,name,maintenance,size,imgURL, country_id : countriesArr };
        return resP;
      });
    },
    getCountries : () => {
      return countries;
    },
    getBase : ()=>'Ok, this one is'
  }
};