import plus from 'add';

export default function arraySum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = plus(arr[i], result);
  }
  return result;
}
