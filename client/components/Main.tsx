import { React, ReactDOM ,useObsidian, BrowserCache } from '../../deps.ts';
import Plants from './Plants/Plants.tsx';
import { Nav } from './Nav.tsx';
import { Header } from './Header.tsx';
import { Section } from './Section.tsx';
import { Footer } from './Footer.tsx';

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

  return (<div>
		<Nav />
		<Header />
		<Section />
		<Footer />
		{/* <button type='button' onClick={()=>handleClick()}>Get All movies</button> */}
		{/* <Plants plants={plants}/> */}
  </div>)
};

export default Main;