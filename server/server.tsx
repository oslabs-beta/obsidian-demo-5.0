// import { React, ReactDOMServer, ReactDOM } from '../deps.ts';
// import { App } from '../client/app.tsx';
// import { types } from './schema.ts';
// import { resolvers } from './resolvers.ts';
// import { routes } from './routes.ts';
// import { emit } from 'https://deno.land/x/emit/mod.ts';

// const app = new Application();

// const router = new Router();

// app.use(router.routes());
// app.use(router.allowedMethods());

// const { files } = await emit('../client/client.tsx', {
//   check: false,
//   bundle: 'module',
//   compilerOptions: {
//     lib: ['dom', 'dom.iterable', 'esnext'],
//   },
// });

// const BROWSER_PATH = '/dev-client.js';

// class Server extends Dero {
//   constructor() {
//     super();
//     // build middleware and mutate body for react
//     this.use((req, res, next) => {
//       res.return.push((body) => {
//         if (React.isValidElement(body)) {
//           res.type('text/html');
//           const content = (ReactDOMServer as any).renderToString(body);
//           const seo = res.locals.seo;
//           return `
//                         <!doctype html>
//                         <html>
//                         <head>
//                             <title>${seo.title}</title>
//                             <meta name="description" content="${
//                               seo.description
//                             }">
//                             <script>window.__INITIAL_DATA__ = ${JSON.stringify(
//                               seo
//                             )};</script>
//                         </head>
//                         <body>
//                             <div id="root">${content}</div>
//                             <script src="${BROWSER_PATH}" defer></script>
//                         </body>
//                         </html>
//                     `;
//         }
//         return;
//       });
//       next();
//     });
//     // get the client js
//     this.get(BROWSER_PATH, (req, res) => {
//       res.type('application/javascript').body(files['deno:///bundle.js']);
//     });
//     // exact for all route
//     this.get('/*', (req, res) => {
//       const route = routes.find((r) => matchPath(req.url, r));
//       if (route) {
//         res.locals.seo = route.seo;
//         return (
//           <StaticRouter location={req.url}>
//             <App
//               isServer={true}
//               Component={route.component}
//               initData={{ seo: route.seo }}
//             />
//           </StaticRouter>
//         );
//       }
//       res.status(404).body('Not Found');
//     });
//   }
// }
// await new Server().listen(3000, () =>
//   console.log('> Running on http://localhost:3000/')
// );

// // router.get("/", (context:any) => {
// //   context.response.body =
// //     `<!DOCTYPE html>
// //        <html lang="en">
// //        <head>
// //        <meta charset="UTF-8">
// //        <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
// //        <title>Demo</title>
// //        </head>
// //        <body>
// //        <div id="root">${(ReactDOMServer as any).renderToString(<App />)}
// //        </div>
// //        </body>
// //        </html>`;
// // });

// // const GraphQLService = await applyGraphQL<Router>({
// //   Router,
// //   typeDefs: types,
// //   resolvers: resolvers,
// // });

// // app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

// // app.listen({ port: 8000 });
// // console.log(`server is running on port: 8000`);
