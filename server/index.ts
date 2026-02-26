import { publicProcedure, router } from './utils/trpc';
import { signupSchema } from './validator/signup.validator';
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
  signUp: publicProcedure.input(signupSchema).mutation(async (opts) => {
    let email = opts.input.email;
    let password = opts.input.password;

    //db calls, validations
    //jwt signing

    let token = 'token';

    return { token };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(8000);

export type AppRouter = typeof appRouter;
