import {Application , Router} from '../serverDeps.ts';

const app = new Application();

const router = new Router();

router.get('/',(context)=>{
  context.response.body = 'works';
})
.get('/users',(context)=>{
  context.response.body = 'Users';
});

app.use(router.routes());

await app.listen({port:8000});