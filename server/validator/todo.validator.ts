import { z } from 'zod';

export const todoInputSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
});

export type TodoInputType = z.infer<typeof todoInputSchema>;
