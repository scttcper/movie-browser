import Server from 'next/dist/next-server/server/next-server';
import { Server as HapiServer } from '@hapi/hapi';

import { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } from './next-wrapper';

/**
 * this seems to be required for registering all the nextjs pages right now
 */
export function registerPages(server: HapiServer, app: Server) {
  server.route({
    method: 'GET',
    path: '/movie',
    handler: pathWrapper(app, '/movie'),
  });

  server.route({
    method: 'GET',
    path: '/movie/{id}',
    handler: pathWrapper(app, '/movie/[id]'),
  });
}

export function registerNextjs(server: HapiServer, app: Server) {
  server.route({
    method: 'GET',
    path: '/_next/{p*}' /* next specific routes */,
    handler: nextHandlerWrapper(app),
  });

  server.route({
    method: 'GET',
    path: '/static/{p*}' /* use next to handle static files */,
    handler: nextHandlerWrapper(app),
  });

  server.route({
    method: '*',
    path: '/{p*}' /* catch all route */,
    handler: defaultHandlerWrapper(app),
  });
}
