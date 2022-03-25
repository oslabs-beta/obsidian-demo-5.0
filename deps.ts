import React from 'https://jspm.dev/react@17.0.2';
import ReactDOMServer from 'https://jspm.dev/react-dom@17.0.2/server';
import ReactDom from 'https://jspm.dev/react-dom@17.0.2';
import ReactRouterDomClient from "https://dev.jspm.io/react-router-dom@5.2.0";

const ReactRouterDom = ReactRouterDomClient as any;

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

export {React, ReactDOMServer, ReactDom, ReactRouterDom};