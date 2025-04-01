function LinearSearch(array: number[], num: number): void {
  for (let i = 0, step = 1; i < array.length; i++, step++) {
    if (array[i] === num)
      return console.log(`found ${num} in position ${i} after ${step} step`);
  }
  console.log(`can't find ${num}`);
}

LinearSearch([33, 4, 52, 7, 3, 9, 23, 42, 56, 14, 87], 56);
//Worst case = O(n)
//Best case = O(1)
