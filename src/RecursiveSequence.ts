function RecursiveSequence(n: number): number {
  return n === 1 ? 10 : RecursiveSequence(n - 1) + 15;
}

RecursiveSequence(3);
// //Worst case = O(n)
// //Best case = O(1)
