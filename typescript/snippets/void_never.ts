/*
  Data Types
  - Void
  --- returns Nothing
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- never returns
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
  --- never returns
*/

function logging(msg: string): void {
  console.log(msg);
  return; // this is void
}

console.log(logging("Iam A Message"));
console.log("Test");

// use never
const fail = (msg: string): never => {
  throw new Error(msg);
  // return 10;
};

function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

// alwaysLog("Osama");
// console.log("Test");
