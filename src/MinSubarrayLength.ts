function MinSubarrayLength(array: number[], targetSum: number): number {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  for (let right = 0; right < array.length; right++) {
    sum += array[right];
    while (sum >= targetSum) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= array[left++];
    }
  }
  return minLength;
}

MinSubarrayLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);
// //Worst case = O(n)
// //Best case = O(n)
