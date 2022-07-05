const longestWordInAString = (s) => {
    // let LongestWord = '';
    // s.split(' ').map(c => {
    //     if (c.length > LongestWord.length) LongestWord = c;
    // });
    // return LongestWord;

    // return s.split(' ').reduce((a, c) => a.length > c.length ? a : c, '');
    return s.split(' ').reduce((a, c) => a.length > c.length ? a : c);
};

console.log(longestWordInAString(`in programming  we love elzero academy toooooooooooooo much`));