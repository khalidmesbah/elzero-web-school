type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type Last = Buttons & {
  x: boolean;
};

const getActions = (btns: Last) => {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
};

getActions({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
  x: true,
});
