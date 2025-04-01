function AveragePair(array: number[], average: number): [number, number][] {
  let left = 0;
  let right = array.length - 1;
  const result: [number, number][] = [];
  while (left < right) {
    const currentAverage = (array[left] + array[right]) / 2;
    if (currentAverage === average) result.push([array[left], array[right]]);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    currentAverage < average ? left++ : right--;
  }
  return result;
}

AveragePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
//Worst case = O(n)
//Best case = O(1)
