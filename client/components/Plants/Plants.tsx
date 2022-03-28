import { React } from '../../../deps.ts';
import Plant from './Plant.tsx';


const Plants = (props: any) =>{
  const arrOfPlants = props.plants?.movies?.map((plant:any, id:any, country:any, name:any, maintenence: any, size:any, imgUrl:any)=>{
    return <Plant key={id} plant = {plant} country={country} name={name} maintenance={maintenence} size={size} imgUrl={imgUrl} />
  });
  // change the above to platns. 
  return (<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    {arrOfPlants}
  </div>)
};

export default Plants;