export default function multArray(arr, mult) {
  const collector = [];

  for (let i = 0; i < arr.length; i++) {
    collector.push(arr[i] * mult);
  }

  return collector;
}
