// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => setInterval(() => {
    if (time < time * time) {
      resolve(time);
    } else {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
  }), Date.now());
}

export async function asyncDelay(time) {
  return new Promise(async resolve => resolve(time), Date.now());
}
