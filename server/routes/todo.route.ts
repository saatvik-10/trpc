import { publicProcedure, router } from '../utils/trpc';
import { todoInputSchema } from '../validator/todo.validator';

export const todoRouter = router({
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
