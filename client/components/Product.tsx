import { React } from "../../deps.ts";

const AddContainer = (props: any) => {
  const [name, setName] = (React as any).useState("");
  const [maintance, setMaintance] = (React as any).useState("");
  const [size, setSize] = (React as any).useState("");
  const [url, setUrl] = (React as any).useState("");

  const onAdd = () => {
    const obj = {
      name: "",
      maintance: "",
      size: "",
      url: "",
    };
    obj.name = name;
    obj.maintance = maintance;
    obj.size = size;
    obj.url = url;
    console.log("So this is our data");
    console.log(obj);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={style} className="card h-100">
      <div >
        <p >Add Plant</p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <label htmlFor="maintance">Maintance</label>
        <input
          id="maintance"
          onChange={(e: any) => {
            setMaintance(e.target.value);
          }}
          type="text"
        />
        <label htmlFor="size">Size</label>
        <input
          id="nasizeme"
          onChange={(e: any) => {
            setSize(e.target.value);
          }}
          type="text"
        />
        <label htmlFor="url">Url</label>
        <input
          id="url"
          onChange={(e: any) => {
            setUrl(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            onAdd();
          }}
        >
          Create Plant
        </button>
      </div>
    </div>
  );
};

export default AddContainer;
