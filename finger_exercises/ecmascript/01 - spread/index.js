import { isArray } from './utils';

export function min(value) {
  if (!isArray(value)) {
    return value;
  }
  return Math.min(...value);
}

export function copy() {

}
