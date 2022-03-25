import { React, ReactDOM ,useObsidian, BrowserCache } from '../../deps.ts';
import Plants from './Plants/Plants.tsx';

const Main = (props : any) =>{
	const [plants, setPlants] = (React as any).useState([]);
	const { query, mutate, cache, setCache, clearCache } = useObsidian();

	const allMoviesQuery = `query {
    movies {
      id
      title
      genre
			releaseYear
			actors {
				id
				firstName
				lastName
			}
    }
  }
`;
	const handleClick = async () => { 
			const result = await query(allMoviesQuery);
			setPlants(result.data);
	}

  return (<div>
		<button type='button' onClick={()=>handleClick()}>Get All movies</button>
		<Plants plants={plants}/>
  </div>)
};

export default Main;