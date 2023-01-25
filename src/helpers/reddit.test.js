import { getPosts } from "./reddit";

test('getPosts returns a JSON object', async () => {
    const results = await getPosts('test', 'hot', 'month');
    console.log(results);
  });