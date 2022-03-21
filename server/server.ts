import { Application, Router, send } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

const app = new Application();

const router = new Router();

// app.use(router.routes());

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/client`,
    index: 'index.html'
  });
});

// router.get('/api', (context) => {
//   context.response.body = 'works';
//   }).post()
//   .get('/api/users', (context) => {
//     context.response.body = 'Users';
//   });


await app.listen({ port: 8000 });