// A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.ttest.ts

let article: readonly [number, string, boolean] = [11, "title one", true];

// article.push("title two"); // => works if you don't use the readonly

console.log(article);
