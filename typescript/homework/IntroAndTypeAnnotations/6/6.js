var nothing;
var theName = "Elzero";
function showMyDetails(a, b, c) {
    if (a === void 0) { a = ""; }
    if (b === void 0) { b = ""; }
    return "".concat(a).concat(b).concat(c);
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
