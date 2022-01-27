// https://fettblog.eu/typescript-array-includes/

export const includes = <T extends U, U>(
  arr: ReadonlyArray<T>,
  el: U
): el is T => arr.includes(el as T);
