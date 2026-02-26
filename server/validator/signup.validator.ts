import { z } from 'zod';

export const signupSchema = z.object({
  email: z.email('Email is required'),
  password: z.string().min(8, 'Password should be minimum 8 characters long'),
});

export type SignUptype = z.infer<typeof signupSchema>;
