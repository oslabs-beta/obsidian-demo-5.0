import { React } from '../../../deps.ts';
import Plant from './Plant.tsx';

const Plants = (props: any) =>{
  const arrOfPlants = props.plants?.movies?.map((plant:any, id:any)=>{
    return <Plant key={id} plant = {plant} />
  });
  return (<div>
    Plants will be here
    {arrOfPlants}
  </div>)
};

export default Plants;