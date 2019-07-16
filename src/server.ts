import Koa, { Context } from 'koa';
import next from 'next';
import Router from '@koa/router';

import { movies} from './movies';

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/api/movie', async (ctx: Context) => {
    const id = Number(ctx.params.id);
    ctx.body = movies;
  });

  router.get('/api/movie/:id', async (ctx: Context) => {
    const id = Number(ctx.params.id);
    const movie = movies.find(n => n.id === id);
    ctx.body = movie;
  });

  // // router.get('/movie/:id', async (ctx: Context) => {
  // //   await app.render(ctx.req, ctx.res, `/movie/${ctx.params.id}`, ctx.query);
  // //   ctx.respond = false;
  // // });

  // router.get('/b', async (ctx: Context) => {
  //   await app.render(ctx.req, ctx.res, '/b', ctx.query);
  //   ctx.respond = false;
  // });

  router.get('*', async (ctx: Context) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
