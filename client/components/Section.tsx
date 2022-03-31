import { React } from "../../deps.ts";
import Plant from "./Plants/Plant.tsx";
import Plants from "./Plants/Plants.tsx";
import {useObsidian} from '../../deps.ts';
import AddPlant from './AddPlant.tsx';
import BrowserCache from '../../obsidian/src/Browser/CacheClassBrowser.js'
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
	// pull up state to here and pass down
	// pass down setStates to addPlant
  const [plants, setPlants] = (React as any).useState([]);
  const { query, mutate, cache, setCache, clearCache } = useObsidian();
  const [name, setName] = (React as any).useState("");
  const [maintenance, setMaintenance] = (React as any).useState("");
  const [size, setSize] = (React as any).useState("");
  const [imageurl, setImageurl] = (React as any).useState("");

	// CLEAR CACHE
	function onClick(e: any) {
    clearCache();
    setTimeout(() => setCache(new BrowserCache(cache.storage)), 1);
  }

	// GQL QUERIES
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

	const lowMaintenancePlantsQuery = `query {
		plants(input: {maintenance: "Low"}) {
			id
			name
			size
			maintenance
			imageurl
		}
	}`

	const largePlantsQuery = `query {
		plants(input: {size: "Large"}) {
			id
			name
			size
			maintenance
			imageurl
		}
	}`

	// GQL MUTATIONS
	const addPlantQuery = `mutation {
		addPlant(input: {name: "${name}", maintenance: "${maintenance}", size: "${size}", imageurl: "${imageurl}"}) {
			id
			name
			maintenance
			size
			imageurl
		}
	}`

	// QUERY HANDLE CLICKS
  const getAllPlants = async () => {
    const result = await query(allPlantsQuery);
    setPlants(result.data.plants);
  };

	const getLowMaintenancePlants = async() => {
		const result = await query(lowMaintenancePlantsQuery)
		setPlants(result.data.plants);
	}

	const getLargePlants = async() => {
		const result = await query(largePlantsQuery)
		setPlants(result.data.plants);
	}

	// MUTATION HANDLE CLICKS
  const addPlant = async (e: any) => {
    e.preventDefault();
    // console.log(addPlantQuery)
    const res = await mutate(addPlantQuery);
    // get the new plant
    const newPlant = res.data.addPlant;
    // copy the old plants and add the new one
    await setPlants([...plants, newPlant]);
		await setName('');
		await setMaintenance('');
		await setSize('');
		await setImageurl('');
  };

	const deletePlant = async (id:any) => {
    const deletePlantMutation = `mutation {
        deletePlant(id:${id}) {
          id
          name
        }
      } 
    `;
    const res = await mutate(deletePlantMutation);    
		const deletedPlant = res.data.deletePlant;
		setPlants(plants.filter((plant) => {
			return plant.id !== id
		}))
	}

	// CLEAR CACHE


  return (
		<div className='bg-dark text-light m-0 h-100'>
        <AddPlant addPlant={addPlant} name={name} setName={setName} maintenance={maintenance} setMaintenance={setMaintenance} size={size} setSize={setSize} imageurl={imageurl} setImageurl={setImageurl} />
        <div className="text-center my-2">
      		<button className="btn btn-outline-primary" onClick={getAllPlants}>All Plants</button>
      		<button className="btn btn-outline-primary mx-2" onClick={getLowMaintenancePlants}>Low Maintenance Plants</button>
      		<button className="btn btn-outline-primary" onClick={getLargePlants}>Large Plants</button>
        </div>
        <Plants plants={plants} deletePlant = {deletePlant} />
				<button
              type="button"
              className="content-center d-none px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={clearCache}
							id="clearCacheButton"
            >
              Clear Cache
            </button>
    </div>
  );
};
