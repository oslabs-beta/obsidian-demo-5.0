<<<<<<< HEAD
import { React, ReactDOM } from '../../deps.ts';

const Main = (props : any) =>{
	const handleClick = () => {
		console.log('Testing out javascript functionality')
	}
	
  console.log(props);
  return (<div>
		<button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>Pull my finger</button>
	<button type="button" className="btn btn-secondary btn-lg" onClick={handleClick}>Rub my tummy</button>
    {props.data}
=======
import { React } from '../../deps.ts';

const Main = (props : any) =>{
  return (<div>
    Main
>>>>>>> 7b297059eda79fb81fa8264719c9715e04f715c6
  </div>)
};

export default Main;