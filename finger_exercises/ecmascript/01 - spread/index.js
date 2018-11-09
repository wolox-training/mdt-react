import { isArray } from './utils';

export function min(args) {
  if (!args) {
    return args;
  }
  return isArray(args) ? Math.min(...args) : Math.min(...arguments);
}

export const copy = obj => (isArray(obj) ? [...obj] : { ...obj });

export const reverseMerge = (arr1, arr2) => [...arr2, ...arr1];

export const filterAttribs = obj => {
  const copied = copy(obj);
  delete copied.a;
  delete copied.b;
  return copied;
};
