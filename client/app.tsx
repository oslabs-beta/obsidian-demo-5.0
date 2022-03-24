import { React } from '../deps.ts';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
      p: any;
      li: any;
      ul: any;
    }
  }
}

const App = (props:any)=>{
  return (<div>
    <Header />
    <Main />
    <Footer />
  </div>)
};

export default App;