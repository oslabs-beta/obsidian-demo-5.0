import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import ReactDOM from 'https://dev.jspm.io/react-dom';
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

export {React, ReactDOMServer, ReactDOM, Pool, ObsidianWrapper, useObsidian, BrowserCache};
