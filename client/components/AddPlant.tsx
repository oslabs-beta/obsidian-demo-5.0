import { React } from "../../deps.ts";
import {useObsidian} from '../../deps.ts';

const AddContainer = (props: any) => {
  const { query, mutate, cache, setCache, clearCache } = useObsidian();
  // const [name, setName] = (React as any).useState("");
  // const [maintenance, setMaintenance] = (React as any).useState("");
  // const [size, setSize] = (React as any).useState("");
  // const [imageurl, setImageurl] = (React as any).useState("");

  // const addPlantQuery = `mutation {
  //   addPlant(input: {name: "${name}", maintenance: "${maintenance}", size: "${size}", imageurl: "${imageurl}"}) {
  //     id
  //     country {
  //       name
  //     }
  //     name
  //     maintenance
  //     size
  //     imageurl
  //   }
  // }`;

  // const addPlant = async (e: any) => {
  //   // const obj = {
  //   //   name: "",
  //   //   maintenance: "",
  //   //   size: "",
  //   //   imageurl: "",
  //   // };
  //   // obj.name = name;
  //   // obj.maintenance = maintenance;
  //   // // obj.size = size;
  //   // // obj.imageurl = imageurl;
  //   // console.log("So this is our data");
  //   // console.log(obj);
  //   // e.preventDefault();
  //   e.preventDefault();
  //   console.log(addPlantQuery)
  //   const res = await mutate(addPlantQuery);
  //   console.log('Here\'s the result from adding: ', res)

  // };

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
<form>
  <div className="row p-3" display="flex">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault01">Name</label>
      <input type="text" className="form-control" value={props.name} required onChange={(e: any) => props.setName(e.target.value)} />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault02">Maintenance</label>
      <input type="text" className="form-control" value={props.maintenance} required onChange={(e: any) => props.setMaintenance(e.target.value)} />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault02">Size</label>
      <input type="text" className="form-control" value={props.size} required onChange={(e: any) => props.setSize(e.target.value)}/>
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault02">Image URL</label>
      <input type="text" className="form-control" value={props.imageurl} required onChange={(e: any) => props.setImageurl(e.target.value)} />
    </div>
  </div>
  <div className="col text-center">
  <button className="btn btn-primary" type="submit" onClick={props.addPlant}>Submit form</button>
  </div>
</form>
);
};

export default AddContainer;