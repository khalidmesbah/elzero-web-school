const addAll = (...nums: number[]): number => nums.reduce((a, b) => a + b, 0);

console.log(addAll(10, 20, 30, 100, 10.5, +true));
// true only will give an error so we use the unary operator +
