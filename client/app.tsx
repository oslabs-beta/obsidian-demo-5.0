// deno-lint-ignore-file no-explicit-any
import { React, ReactDOMServer, ObsidianWrapper } from '../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
      p: any;
    }
  }
}

const App = () => {
  return (
    <ObsidianWrapper>
      <h1>Test</h1>
    </ObsidianWrapper>
  )};

  export default App;