import { create } from 'node:domain';
import { trpc } from '.';

async function main() {
  let createTodo = await trpc.createTodo.mutate({
    title: 'My Todo',
    description: 'This is my first todo',
  });

  let signUp = await trpc.signUp.mutate({
    email: 'sm@gmail.com',
    password: 'kotharimdc',
  });

  console.log({createTodo, signUp})
}

main();
