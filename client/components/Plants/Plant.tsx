import { React } from '../../../deps.ts';

const Plant = (props: any) =>{
  const {id , title, genre, releaseYear} = props.plant;
  return (<div>
    Nice component
    <div>Id : {id}</div>
    <div>Title : {title}</div>
    <div>Genre : {genre}</div>
    <div>Release Year : {releaseYear}</div>
    <div></div>
  </div>)
};

export default Plant;