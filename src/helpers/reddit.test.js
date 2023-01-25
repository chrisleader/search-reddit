import { getPosts, getComments } from "./reddit";
const url = 'https://www.reddit.com/r/TrueOffMyChest/comments/101126z/my_boyfriend_asked_for_a_paternity_test_for_our/';

test('getPosts returns a JSON object', async () => {
  const results = await getPosts('test', 'hot', 'month');
  console.log(results);
});

test('getPosts returns a JSON object', async () => {
  const results = await getComments(url);
  console.log(results);
});