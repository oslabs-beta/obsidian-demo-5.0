import React from 'https://jspm.dev/react';
import ReactDOMServer from 'https://jspm.dev/react-dom/server';
import ReactDOM from 'https://jspm.dev/react-dom';
import { Pool } from 'https://deno.land/x/postgres/mod.ts';
import {
  ObsidianWrapper,
  useObsidian,
} from './obsidian/ObsidianWrapper/ObsidianWrapper.jsx';
import BrowserCache from './obsidian/src/Browser/CacheClassBrowser.js';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [k: string]: any;
        }
    }
}
// export {
//   BrowserRouter,
//   Link,
//   NavLink,
//   Route,
//   Routes,
//   useNavigate,
//   useParams,
// } from "https://esm.sh/react-router-dom@6.2.1?target=deno&pin=v61";

export {React, ReactDOMServer, ReactDOM, Pool, ObsidianWrapper, useObsidian, BrowserCache};
