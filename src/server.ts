import next from 'next';
import { Server } from '@hapi/hapi';
import Joi from '@hapi/joi';
import Basic from '@hapi/basic';
import Good from '@hapi/good';
import Boom from '@hapi/boom';

import { registerPages, registerNextjs } from './pageRoutes';
import { db } from './db';
import knex from 'knex';

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
    handler: async request => {
      const results = await db
        .select()
        .from('tmdb')
        .limit(10);
      return results;
    },
  });

  server.route({
    method: 'GET',
    path: '/api/movie/{id}',
    handler: async request => {
      const tmdbId = request.params.id;
      try {
        const tmdb = await db
          .select()
          .from('tmdb')
          .where('id', tmdbId)
          .first();
        if (!tmdb) {
          Boom.notFound();
        }

        const links = await db
          .select(db.raw('DISTINCT ON ("site") "id", "site", "version", "content_id", "url"'))
          .from('link')
          .where('tmdb_id', tmdbId)
          .orderBy([{ column: 'site' }, { column: 'version', order: 'desc' }]);
        tmdb.links = links;
        return tmdb;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number(),
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
