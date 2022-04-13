import { React, ReactDOMServer, ObsidianWrapper } from '../deps.ts';
import Main from './components/Main.tsx';
import Plants from './components/Plants/Plants.tsx';
import AddPlant from './components/AddPlant.tsx';
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
			label: any;
		}
	}
}

const App = (props: any) => {
	return (
		<ObsidianWrapper>
			<Main />
		</ObsidianWrapper>
	);
};

export default App;
