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
