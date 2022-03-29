import { React } from '../../../deps.ts';
import Plant from './Plant.tsx';


const Plants = (props: any) =>{
  console.log('Here are the plants, in Plants component: ', props.plants)
  // console.log('Props in Plants')
  // console.log(props.plants)

  const arrOfPlants = props?.plants?.map((plant:any)=>{
    console.log(plant);
    return <Plant key={plant.id} plant={plant} deletePlant={props.deletePlant}/>
  });

  return (<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mx-2 my-4">
    {arrOfPlants}
  </div>)
};

export default Plants;