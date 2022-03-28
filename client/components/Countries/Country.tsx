import { React } from '../../../deps.ts';


const Country = (props: any) =>{
  const {id, name, climate, plant} = props.country;
  return (
  <div className="col mb-5">
    <div className="card h-100">
      <div className="card-body p-4">
        <div> name : {name}</div>
        <div> climate : {climate}</div>
        <div> plant : {plant}</div>
        <div>
          {/* <button onClick={()=>props.deleteCountry(id)} className="btn btn-danger">Delete</button>
          <button onClick={()=>props.updateCountry(id)} className="btn btn-warning">Update</button> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Country;