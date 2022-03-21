import { React } from '../deps.ts';
import Main from './components/Main.tsx';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
      p: any;
    }
  }
}

const App = (props:any)=>{
  return (<div>
    Finally some new progress
    <Main data={'Ok, works'} />
  </div>)
};

export default App;