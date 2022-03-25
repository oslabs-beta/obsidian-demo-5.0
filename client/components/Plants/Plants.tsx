import { React } from '../../../deps.ts';
import Plant from './Plant.tsx';

const Plants = (props: any) =>{

  console.log('In plants')
  console.log(props.plants);
  const arrOfPlants = props.movies.map((plant:any)=>{
    <Plant plant = {plant} />
  });
  return (<div>
    Plants will be here
    {arrOfPlants}
  </div>)
};

export default Plants;