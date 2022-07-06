const removeDuplicateWords = (s) => {
    // let res = [];
    // s = s.split(' ');
    // for (let i = 0; i < s.length; i++) if (!res.includes(s[i])) res.push(s[i]);
    // or for (let i = 0; i < s.length; i++) if (res.indexOf(s[i]) === -1) res.push(s[i]);
    // return res.join(' ');


    // return s.split(' ').filter((c, i, a) => {
    //     if (!a.slice(0, i).includes(c)) return c;
    // }).join(' ');

    // return Array.from(new Set(s.split(' '))).join(' ');

    // return [...new Set(s.split(' '))].join(' ');

    return [...s].reverse().join('').replace(/(\b\s.+\b)(?=.*\1)/g, '').split('').reverse().join('');
};

console.log(removeDuplicateWords('hello elzero web web hello school'));