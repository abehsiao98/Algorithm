function FibonacciSequence(num: number): number {
  if (num <= 1) return num;
  let [previous, current] = [0, 1];
  for (let i = 2; i <= num; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
}

FibonacciSequence(7);
// //Worst case = O(n)
// //Best case = O(1)
