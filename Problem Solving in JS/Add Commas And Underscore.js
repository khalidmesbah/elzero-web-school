/* const addCommasAndUnderscores = (num) => {
    num = [...String(num)];
    if (num.length === 3) return num.join('');
    else if (4 <= num.length && num.length <= 6) {
        num[num.length - 4] += `_`;
    } else {
        let ft = 1;
        for (let i = 0; i < num.length; i++) {
            if ((i + 1) % 3 === 0) {
                if (ft) num[num.length - 2 - i] += `_`, ft = 0;
                else num[num.length - 2 - i] += `,`;
            }
        }
    }
    return num.join('');
}; */
/* const addCommasAndUnderscores = (num) => {
    num = [...num.toLocaleString()];
    num[num.length - 4] = `_`;
    return num.join('');
}; */
const addCommasAndUnderscores = (num) => {
    return [...String(num)].reverse().join('').match(/\d{3}|\d+/gi).join(',').replace(/\,/, `_`).split('').reverse().join('');
};
console.log(addCommasAndUnderscores(120));
console.log(addCommasAndUnderscores(1530));
console.log(addCommasAndUnderscores(120510650));
console.log(addCommasAndUnderscores(510650480910));
console.log(addCommasAndUnderscores(12069057014032));