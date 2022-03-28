import { React } from "../../deps.ts";
import {useObsidian} from '../../deps.ts';

const AddContainer = (props: any) => {
  const { query, mutate, cache, setCache, clearCache } = useObsidian();
  const [name, setName] = (React as any).useState("");
  const [maintenance, setMaintenance] = (React as any).useState("");
  const [size, setSize] = (React as any).useState("");
  const [imageurl, setImageurl] = (React as any).useState("");

  const addPlantQuery = `mutation {
    addPlant(input: {name: "${name}", maintenance: "${maintenance}", size: "${size}", imageurl: "${imageurl}"}) {
      id
      country {
        name
      }
      name
      maintenance
      size
      imageurl
    }
  }`;

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault01">Name</label>
      <input type="text" className="form-control" value={name} required onChange={(e: any) => setName(e.target.value)} />
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Maintenance</label>
      <input type="text" className="form-control" value={maintenance} required onChange={(e: any) => setMaintenance(e.target.value)} />
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Size</label>
      <input type="text" className="form-control" value={size} required onChange={(e: any) => setSize(e.target.value)}/>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Image URL</label>
      <input type="text" className="form-control" value={imageurl} required onChange={(e: any) => setImageurl(e.target.value)} />
    </div>
  </div>
  <button className="btn btn-primary" type="submit" onClick={props.addPlant}>Submit form</button>
</form>
);
};

export default AddContainer;