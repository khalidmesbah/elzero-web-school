const reverseNumber = (num) => {
    // return String(num).split('').map(e=>+e).reverse()
    // return num.toString().split('').map(e=>+e).reverse() 
    // return [...String(num)].map(e=>+e).reverse()
    return [...String(num)].reduce((a, c) => {
        a.unshift(+c);
        return a;
    }, []);
};

console.log(reverseNumber(564987654));
console.log(reverseNumber(529132));