function showMsg(user, age, country) {
    return "".concat(user).concat(age).concat(country);
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
