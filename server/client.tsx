import { React, ReactDOM, ObsidianWrapper } from "../deps.ts";
import App from "../client/app.tsx";

ReactDOM.hydrate(<App />,	document.getElementById('root'));