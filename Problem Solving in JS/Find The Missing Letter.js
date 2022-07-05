const findMissingLetter = (s) => {
    for (let i = s[0].charCodeAt(0); i < 122; i++)
        if (!s.includes(String.fromCharCode(i)))
            return String.fromCharCode(i);
    return `no missing letters in sequence`;
};
console.log(findMissingLetter(`abce`));
console.log(findMissingLetter(`abcdeghi`));
console.log(findMissingLetter(`defgi`));
console.log(findMissingLetter(`xyz`));