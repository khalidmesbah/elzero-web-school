/*
  Data Types
  - Type Assertions
  --- [x] Sometime Compiler Doesnt Know The Information We Do
  --- [x] TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement>document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));
