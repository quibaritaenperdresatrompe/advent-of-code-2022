export default function play(opponent: number, me: number) {
  if (opponent < me) {
    return me + 6;
  }
  if (opponent === me) {
    return me + 3;
  }
  return me;
}
