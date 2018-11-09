import { isArray } from './utils';

export function min(args) {
  if (!args) {
    return args;
  }
  return isArray(args) ? Math.min(...args) : Math.min(...arguments);
}

export const copy = obj => (isArray(obj) ? [...obj] : { ...obj });
