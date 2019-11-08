import Koa, { Context } from 'koa';
import next from 'next';
import Router from '@koa/router';
import { Server } from '@hapi/hapi';
import Joi from '@hapi/joi';
import Basic from '@hapi/basic';
import Good from '@hapi/good';

import { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } from './next-wrapper';
import { movies } from './movies';
import { registerPages, registerNextjs } from './pageRoutes';
import Boom from '@hapi/boom';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const validateUser = async () => {
  return {
    isValid: true,
    credentials: {
      id: 1,
      name: 'admin',
    },
  };
};

app.prepare().then(async () => {
  const server = new Server({
    debug: { request: ['implementation'] },
    port,
  });

  // basic auth
  await server.register(Basic);
  server.auth.strategy('default', 'basic', { validate: validateUser });
  server.auth.default('default');

  // logging
  await server.register({
    plugin: Good,
    options: {
      reporters: {
        myConsoleReporter: [
          {
            module: '@hapi/good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*', ops: '*' }],
          },
          {
            module: '@hapi/good-console',
          },
          'stdout',
        ],
      },
    },
  });

  // TODO: add favicon
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: () => {
      throw Boom.notFound();
    },
  });

  // register the nextjs pages
  registerPages(server, app);

  // register api routes
  server.route({
    method: 'GET',
    path: '/api/movie',
    handler: (request) => {
      return movies;
    },
    options: {
      auth: 'default',
    },
  });

  server.route({
    method: 'GET',
    path: '/api/movie/{id}',
    handler: request => {
      const movieId = (request.params.id as unknown) as number;
      const movie = movies.find(n => n.id === movieId);
      return movie;
    },
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().positive(),
        }),
      },
    },
  });

  // router.get('/api/movie/:id', async (ctx: Context) => {
  //   const id = Number(ctx.params.id);
  //   const movie = movies.find(n => n.id === id);
  //   ctx.body = movie;
  // });

  // // // router.get('/movie/:id', async (ctx: Context) => {
  // // //   await app.render(ctx.req, ctx.res, `/movie/${ctx.params.id}`, ctx.query);
  // // //   ctx.respond = false;
  // // // });

  // // router.get('/b', async (ctx: Context) => {
  // //   await app.render(ctx.req, ctx.res, '/b', ctx.query);
  // //   ctx.respond = false;
  // // });

  // router.get('*', async (ctx: Context) => {
  //   await handle(ctx.req, ctx.res);
  //   ctx.respond = false;
  // });

  // server.use(async (ctx, next) => {
  //   ctx.res.statusCode = 200;
  //   await next();
  // });

  // server.use(router.routes());
  // server.listen(port, () => {
  //   console.log(`> Ready on http://localhost:${port}`);
  // });

  // handle next static assets
  registerNextjs(server, app);

  await server.start();
  console.log(`> Ready on http://localhost:${port}`);
});
