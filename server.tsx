import { Application, Router, send, ObsidianRouter, gql } from './serverDeps.ts';
import App from './client/app.tsx';
import { React, ReactDOM, ReactDOMServer } from './deps.ts';
import { staticFileMiddleware } from './staticFileMiddleware.ts';
// import React from "https://jspm.dev/react@17.0.2";
// import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
// import ReactDOM from "https://jspm.dev/react-dom@17.0.2";
import resolvers from './server/resolvers.ts';
import types from './server/schema.ts';
import { createDb } from './server/db/db.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { emit } from "https://deno.land/x/emit/mod.ts";
import { bundle } from "https://deno.land/x/emit/mod.ts";

const app = new Application();
const port: number = 3000;

// specify route to create bundle
const jsBundlePath = '/main.js'

// const { files, diagnostics } = await Deno.emit('./server/client.tsx', {
// 	check: false,
//   bundle: "module",
//   // compilerOptions: { lib: ["dom", "dom.iterable", "esnext"] },
// })
const result = await bundle('./server/client.tsx');
const { code } = result;
// console.log(code); 

createDb();

// console.log('Here\'s the diagnostics file: ', diagnostics);
// console.log('Here\'s the diagnostics file: ', diagnostics);

const router = new Router();

router.get("/", (context: any) => {
	const app = (ReactDOMServer as any).renderToString(<App />)
	context.response.type = 'text/html';
	context.response.body =
	`<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
	<title>Demo</title>
	</head>
	<body>
	<div id="root">${app}</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src=${jsBundlePath}></script>
	</body>
	</html>`;
})
.get(jsBundlePath, (context: any) => {
	context.response.type = 'application/javascript';
	context.response.body = code;
})

app.addEventListener("error", (event: any) => {
  console.error(event.error);
});
		
app.use(oakCors());
app.use(router.routes());
app.use(staticFileMiddleware);
app.use(router.allowedMethods());

interface ObsRouter extends Router {
  obsidianSchema?: any;
}
// Create GraphQL Router
const GraphQLRouter = await ObsidianRouter<ObsRouter>({
  Router,
  // context: () => console.log('hi, Cameron'),
  typeDefs: types,
  resolvers: resolvers,
  redisPort: 6379,
  useCache: true,
  usePlayground: true,
  // fields used to create the custom entries in the database
  customIdentifier: ['__typename', 'id'],
});
app.use(GraphQLRouter.routes(), GraphQLRouter.allowedMethods());

app.listen({ port });
console.log(`Server is running on port ${port}`);