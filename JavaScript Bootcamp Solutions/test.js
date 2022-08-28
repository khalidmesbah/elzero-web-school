function generateRandomNumbers(size, max) {
    const randomNumbers = new Set();
    if (max < size) throw new Error(`the max must be bigger than the size`);
    while (randomNumbers.size < size) randomNumbers.add(Math.ceil(Math.random() * max));
    return [...randomNumbers];
}

console.log(generateRandomNumbers(20, 122));