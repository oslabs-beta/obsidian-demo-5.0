console.log('Hello Deno');
import Main from "./components/Main";


// const Main = (props) =>{
//   return (<div>
//     ${props}
//   </div>)
// };

const App = (props)=>{
  return (<div>
    Finally some progress
    <Main data={'Ok,cool'} />
  </div>)
};


ReactDOM.render(<App />, document.getElementById('root'));