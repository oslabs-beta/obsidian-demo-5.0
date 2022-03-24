import {Application, Router, send , applyGraphQL, gql, GQLError} from '../deps-server.ts';
import {React, ReactDOMServer, ReactDom} from '../deps.ts';
import App from '../client/app.tsx';
import {types} from './schemas.ts';
import { resolvers } from './resolvers.ts';

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

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());


app.listen({ port: 8000 });
console.log(`server is running on port: 8000`);