import { React } from '../../../deps.ts';

const Plant = (props: any) =>{
  const {id , title, genre, releaseYear} = props.plant;
  return (<div className="col mb-5">
    <div className="card h-100">
      <div className="card-body p-4">
        <img class="card-img-top" src='../../assets/plant.jpeg' alt='Plant Photo' />
        <div>Id : {id}</div>
        <div>Title : {title}</div>
        <div>Genre : {genre}</div>
        <div>Release Year : {releaseYear}</div>
        <div></div>
      </div>
    </div>
  </div>)
};

export default Plant;