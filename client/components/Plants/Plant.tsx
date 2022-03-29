import { React } from '../../../deps.ts';

const Plant = (props: any) => {
  const {id, name, maintenance, size, imageurl} = props.plant;
  return (<div className="col mb-5">
    <div className="card h-100 bg-secondary">
      <div className="card-body p-4">
        <img className="card-img-top" src={imageurl} alt='Plant Photo' />
        <div className='text-center'><b>Id</b> : {id}</div>
        <div className='text-center'><b>Name</b> : {name}</div>
        <div className='text-center'><b>Maintenance</b> : {maintenance}</div>
        <div className='text-center'><b>Size</b> : {size}</div>
				<div className='text-center'>
        	<button className='btn btn-primary' onClick={()=>props.deletePlant(id)}>Delete Plant</button>
				</div>
			</div>
    </div>
  </div>)
};

export default Plant;