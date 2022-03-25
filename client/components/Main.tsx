import { React, ReactDOM } from '../../deps.ts';

const Main = (props : any) =>{
	const handleClick = () => {
		console.log('Testing out javascript functionality')
	}
	
  console.log(props);
  return (<div>
		<button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>Pull my finger</button>
	<button type="button" className="btn btn-secondary btn-lg" onClick={handleClick}>Rub my tummy</button>
		<button onClick={handleClick}>Here's a button</button>
    {props.data}
  </div>)
};

export default Main;