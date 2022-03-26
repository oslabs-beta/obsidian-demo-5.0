import { React } from '../../../deps.ts';

const Country = (props: any) =>{

  return (<div>
    Nice component
    <div>Id : {props.id}</div>
    <div>Title : {props.title}</div>
    <div>Genre : {props.genre}</div>
    <div>Release Year : {props.releaseYear}</div>
    <div></div>
  </div>)
};

export default Country;