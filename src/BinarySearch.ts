function BinarySearch(array: number[], num: number): void {
  let min = 0;
  let max = array.length - 1;
  let step = 0;

  while (min <= max) {
    step++;
    const mid = Math.floor((min + max) / 2);

    if (array[mid] === num)
      return console.log(`found ${num} in position ${mid} after ${step} step`);
    /* eslint-disable @typescript-eslint/no-unused-expressions */
    num > array[mid] ? (min = mid + 1) : (max = mid - 1);
  }
  console.log(`can't find ${num}`);
}

BinarySearch([3, 4, 5, 7, 8, 9, 12, 42, 56, 78, 87], 12);
//Worst case = O(log n)
//Best case = O(1)
