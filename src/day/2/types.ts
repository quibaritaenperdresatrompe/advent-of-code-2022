export enum OpponentShapeEnum {
  A = 1,
  B = 2,
  C = 3,
}

export enum MyShapeEnum {
  X = 1,
  Y = 2,
  Z = 3,
}

export type OpponentShape = keyof typeof OpponentShapeEnum;

export type MyShape = keyof typeof MyShapeEnum;

export type Round = [OpponentShape, MyShape];
