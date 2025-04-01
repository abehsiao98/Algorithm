function Intersection(array1: number[], array2: number[]): number[] {
  const result: number[] = [];
  const counter: Record<number, number> = {};
  array1
    .concat(array2)
    .forEach((index) => (counter[index] = (counter[index] || 0) + 1));

  Object.entries(counter).forEach(([key, count]) => {
    if (count > 1) result.push(Number(key));
  });
  return result;
}

Intersection([1, 2, 3], [5, 16, 10, 1, 3]);
//Worst case = O(n + m)
//Best case = O(n + m)
