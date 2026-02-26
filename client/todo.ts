import { trpc } from '.';

async function main() {
  let res = await trpc.createTodo.mutate({
    title: 'My Todo',
    description: 'This is my first todo',
  });

  console.log(res);
}

main();
