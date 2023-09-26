const showData = (name: string = "uh", age: number, country?: string): void => {
  console.log(`${name} ${age} ${country}`);
};

showData(undefined, 21, undefined);
