export function debounce(callbackfn, delay) {
  let timerId;
  return function (...args) {
    let context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callbackfn.apply(context, args);
    }, delay);
  };
}

export function throttle(callbackfn, delay) {
  let flag = true;
  return function (...args) {
    let context = this;
    if (flag) {
      callbackfn.apply(context, args);
      flag = false;
        setTimeout(() => {
      flag = true;
    }, delay);
    }
  };
}
