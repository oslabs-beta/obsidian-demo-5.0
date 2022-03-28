import { React } from "../../deps.ts";
import Plant from "./Plants/Plant.tsx";
import Plants from "./Plants/Plants.tsx";
import {useObsidian} from '../../deps.ts';
import AddPlant from './AddPlant.tsx';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
      h5: any;
      p: any;
      nav: any;
      ul: any;
      a: any;
      li: any;
      span: any;
      img: any;
      input: any;
    }
  }
}

export const Section = (props: any) => {
  const [plants, setPlants] = (React as any).useState([]);
  const { query, mutate, cache, setCache, clearCache } = useObsidian();
  const [name, setName] = (React as any).useState("");
  const [maintenance, setMaintenance] = (React as any).useState("");
  const [size, setSize] = (React as any).useState("");
  const [imageurl, setImageurl] = (React as any).useState("");

  const addPlantQuery = `mutation {
    addPlant(input: {name: "${name}", maintenance: "${maintenance}", size: "${size}", imageurl: "${imageurl}"}) {
      id
      country {
        name
      }
      name
      maintenance
      size
      imageurl
    }
  }`;

  const allPlantsQuery = `query {
    plants {
      id
      name
      size
      maintenance
      imageurl
    }
  } 
`;

const deletePlant = async (id:any) =>{
    console.log('Plant was deleted', id)
    const deletePlantMutation = `mutation {
        plant(id:${id}) {
          id
          name
        }
      } 
    `;
    const res = await mutate(deletePlantMutation);    
    console.log('Here\'s the delete mutation response: ', res);
}
  const getAllPlants = async () => {
    const result = await query(allPlantsQuery);
    // console.log(result)
    console.log('Here\'s the plants back from the query: ', result.data);
    setPlants(result.data.plants);
  };

  const addPlant = async (e: any) => {
    e.preventDefault();
    console.log(addPlantQuery)
    const res = await mutate(addPlantQuery);
    // pull out the new plant from the response
    const newPlant = res.data.addPlant;
    // copy the old plants and add the new one
    await setPlants([...plants, newPlant]);
  }; 

  return (
    <div>
        <AddPlant addPlant={addPlant} name={name} setName={setName} maintenance={maintenance} setMaintenance={setMaintenance} size={size} setSize={setSize} imageurl={imageurl} setImageurl={setImageurl} />
        <Plants plants={plants} deletePlant = {deletePlant} />
        <div className="text-center my-2">

      <button className="btn btn-primary" onClick={getAllPlants}>Get plants</button>
        </div>
    </div>
  );
};
