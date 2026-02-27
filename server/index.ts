import { publicProcedure, router } from './utils/trpc';
import { signupSchema } from './validator/signup.validator';
import { todoInputSchema } from './validator/todo.validator';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
  signUp: publicProcedure.input(signupSchema).mutation(async (opts) => {
    const username = opts.ctx.username;
    console.log(username);

    let email = opts.input.email;
    let password = opts.input.password;

    //db calls, validations
    //jwt signing

    let token = 'token';

    return { token };
  }),
  createTodo: publicProcedure.input(todoInputSchema).mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    console.log(opts.ctx.username);

    //db calls

    return {
      id: '1',
    };
  }),
});

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
