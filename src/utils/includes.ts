// https://fettblog.eu/typescript-array-includes/

export const includes = <T extends U, U>(
  coll: ReadonlyArray<T>,
  el: U
): el is T => coll.includes(el as T);
