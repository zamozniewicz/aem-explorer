export const asMock = <T, Y extends any[]>(
  fn?: (...args: Y) => T
): jest.Mock<T, Y> => {
  return fn as jest.Mock<T, Y>;
};
