// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise(resolve => setInterval(() => resolve(time), Date.now()));
}

export function asyncDelay() {

}
