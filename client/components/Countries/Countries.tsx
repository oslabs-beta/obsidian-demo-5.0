import { React } from '../../../deps.ts';
import Country from './Country.tsx';


const Countries = (props: any) =>{

  return (<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    {props.countries?.map((country:any, id:any, plant: any, name: any, climate:any)=>{
      return <Country key={id} plant={plant} name={name} climate={climate} />
    })}
  </div>)
};

export default Countries;
