import { Application, Router, send } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import App from '../client/app.tsx';
import React from "https://jspm.dev/react@17.0.2";
import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
import ReactDOM from "https://jspm.dev/react-dom@17.0.2";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", (context:any) => {
  context.response.body =
    `<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
       <title>Demo</title>
       </head>
       <body>
       <div id="root">${(ReactDOMServer as any).renderToString(<App />)}
       </div>
       </body>
       </html>`;
});

// router.get('/api', (context) => {
//   context.response.body = 'works';
//   }).post()
//   .get('/api/users', (context) => {
//     context.response.body = 'Users';
//   });


await app.listen({ port: 8000 });
console.log(`server is running on port: 8000`);