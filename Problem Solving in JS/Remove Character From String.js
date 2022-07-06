const removeChar = (string, char) => {
    // return [...string].map((c) => {
    //     if (c.toLowerCase() !== char.toLowerCase()) return c;
    // }).filter(c => c).join('');

    // return [...string].filter(c => c.toLowerCase() !== char.toLowerCase()).join('');

    // return Array.from(string).reduce((acc, cur) => (cur.toLowerCase() !== char.toLowerCase()) ? acc + cur : acc);
    
    return string.replace(new RegExp(char, 'gi'), '');
};

console.log(removeChar(`elzzhero`, `z`));
console.log(removeChar(`elxzeroX web sxchool`, `x`));
console.log(removeChar(`Elzero@ Web@@ @@School`, `@`));