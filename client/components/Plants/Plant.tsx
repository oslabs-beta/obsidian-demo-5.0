import { React } from '../../../deps.ts';


// plant should have maintenence, size and country, 
// as well as an update and delete mutation. 


const Plant = (props: any) =>{
  const {id , country, name, maintenance, size, imgUrl} = props.plant;
  return (<div className="col mb-5">
    <div className="card h-100">
      <div className="card-body p-4">
        <img class="card-img-top" src={imgUrl} alt='Plant Photo' />
        <div> maintenance: {maintenance}</div>
        <div> name : {name}</div>
        <div> size : {size}</div>
        <div> country : {country}</div>
        <button onClick={()=>props.deletePlant(id)} className="btn btn-danger">Delete</button>
        <button onClick={()=>props.updatePlant(id)} className="btn btn-warning">Update</button>
      </div>
    </div>
  </div>)
};

export default Plant;