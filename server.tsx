import { Application, Router, send } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import App from './client/App.tsx'
import { React, ReactDOM, ReactDOMServer } from './deps.ts'
// import React from "https://jspm.dev/react@17.0.2";
// import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
// import ReactDOM from "https://jspm.dev/react-dom@17.0.2";

const app = new Application();
const port: number = 8000;

// specify route to create bundle
const jsBundlePath = '/main.js'

const { files, diagnostics } = await Deno.emit('./server/client.tsx', {
	check: false,
  bundle: "module",
  // compilerOptions: { lib: ["dom", "dom.iterable", "esnext"] },
})

console.log('Here\'s the diagnostics file: ', diagnostics);

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
	context.response.body = files["deno:///bundle.js"];
})

app.addEventListener("error", (event) => {
  console.error(event.error);
});

// router.get('/api', (context) => {
	//   context.response.body = 'works';
	//   }).post()
	//   .get('/api/users', (context) => {
		//     context.response.body = 'Users';
		//   });
		
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`Server is running on port ${port}`);