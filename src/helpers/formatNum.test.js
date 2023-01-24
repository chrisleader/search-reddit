import upvotes from "./formatNum";

test('format 292 upvotes', () => {
  console.log((upvotes(292)));
});

test('format 2292 upvotes', () => {
    console.log((upvotes(2292)));
  });

test('format 22,292 upvotes', () => {
    console.log((upvotes(22292)));
  });

test('format 222,292 upvotes', () => {
    console.log((upvotes(222292)));
  });

test('format 2,222,292 upvotes', () => {
    console.log((upvotes(2222292)));
  });