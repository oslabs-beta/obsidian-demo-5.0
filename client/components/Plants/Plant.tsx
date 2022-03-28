import { React } from '../../../deps.ts';

const Plant = (props: any) => {
  const {id, name, maintenance, size, imageurl} = props.plant;
  return (<div className="col mb-5">
    <div className="card h-100">
      <div className="card-body p-4">
        <img className="card-img-top" src={imageurl} alt='Plant Photo' />
        <div>Id : {id}</div>
        <div>Name : {name}</div>
        <div>Maintenance : {maintenance}</div>
        <div>Size : {size}</div>
        <button className='btn btn-primary' onClick={()=>props.deletePlant(id)}>Delete Plant</button>
      </div>
    </div>
  </div>)
};

export default Plant;