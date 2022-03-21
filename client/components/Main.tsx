import { React, ReactDom } from '../../deps.ts';

const Main = (props : any) =>{
  console.log(props);
  return (<div>
    {props.data}
  </div>)
};

export default Main;