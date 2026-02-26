import { publicProcedure, router } from './utils/trpc';
import { todoInputSchema } from './validator/todo.validator';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
  createTodo: publicProcedure.input(todoInputSchema).mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    //db calls

    return {
      id: '1',
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(8000);

export type AppRouter = typeof appRouter;
