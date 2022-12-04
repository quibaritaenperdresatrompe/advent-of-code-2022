import {
  MyShape,
  MyShapeEnum,
  OpponentShape,
  OpponentShapeEnum,
} from "./types";

function play(round: [OpponentShape, MyShape]) {
  const opponent = OpponentShapeEnum[round[0]] as number;
  const me = MyShapeEnum[round[1]] as number;
  if (opponent < me) {
    return me + 6;
  }
  if (opponent === me) {
    return me + 3;
  }
  return me;
}

export default play;
