function MaxSum(array: number[], size: number): number {
  if (array.length < size) return 0;

  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < size; i++) {
    sum += array[i];
  }

  maxSum = sum;

  for (let i = size; i < array.length; i++) {
    sum = sum + array[i] - array[i - size];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

MaxSum([23, 23, 5, 2, 5, 325, 23, 5, 6, 533, 123, 3, 4, 22, 1], 3);
// //Worst case = O(n)
// //Best case = O(n)
