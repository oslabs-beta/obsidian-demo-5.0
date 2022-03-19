// deno-lint-ignore-file no-explicit-any
import { React, ReactDom } from '../deps.ts';
import App from './app.tsx';

(ReactDom as any).hydrate(<App />, document.getElementById('root'));