import { isArray } from './utils';

export function min(args) {
  return isArray(args) ? Math.min(...args) : Math.min(...arguments);
}

export function copy() {

}
