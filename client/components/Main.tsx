import { React, ReactDOM ,useObsidian, BrowserCache } from '../../deps.ts';
import Plants from './Plants/Plants.tsx';
import { Nav } from './Nav.tsx';
import { Header } from './Header.tsx';
import { Section } from './Section.tsx';
import { Footer } from './Footer.tsx';
import Countries from './Countries/Countries.tsx';

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
      hr: any;
    }
  }
}

const Main = (props : any) => {
	const [plants, setPlants, countries, setCountries] = (React as any).useState([]);
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

	const handleClick2 = async () => { 
		const result = await query(allMoviesQuery);
		setCountries(result.data);
 }  
  return (<div>
		<Nav />
		<Header />
		<Section />
		<Footer />
		<button type='button' onClick={()=>handleClick()}>Get All movies</button>
		<Plants plants={plants}/>
		<Countries countries={countries}/>

  </div>)
};

export default Main;