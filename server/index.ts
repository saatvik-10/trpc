import { authRouter } from './routes/auth.route';
import { todoRouter } from './routes/todo.route';
import { mergeRouters } from './utils/trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = mergeRouters(authRouter, todoRouter);

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers['authorization'];
    console.log(authHeader);
    //jwt verification
    return {
      username: 'test',
    };
  },
});

server.listen(8000);

export type AppRouter = typeof appRouter;
