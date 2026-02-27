import { publicProcedure, router } from '../utils/trpc';
import { signupSchema } from '../validator/signup.validator';

export const authRouter = router({
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
});
