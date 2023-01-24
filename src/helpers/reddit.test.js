import { getPosts } from "./reddit";

test('getPosts returns a JSON object', async () => {
    const results = await getPosts('test');
    console.log(results);
  });