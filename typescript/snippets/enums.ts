/*
  Data Types
  - Enums => Enumerations
  --- [x] Allow Us To Declare A Set Of Named Constants
  --- [x] Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- [x] It Organize Your Code
  --- [x] By Default Enums Are Number-Based, First Element Is 0
  --- [x] There's A Numeric Enums
  --- [x] There's A String-Based Enums
  --- [x] There's Heterogeneous Enums [String + Number]
  --- [x] Enum Can Refer To Other Enum
  --- [x] Enum Can Refer To Same Enum
  --- [x] Enum Can Have Calculations
  --- [x] Enum Can Have Functions
  --- [x] 
*/

function getHardSeconds(): number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds(),
}

console.log(Level);

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
