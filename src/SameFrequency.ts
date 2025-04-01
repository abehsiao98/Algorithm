function SameFrequency(str1: string, str2: string): boolean {
  const counter: Record<string, number> = {};

  if (str1.length !== str2.length) return false;
  str1
    .split("")
    .concat(str2.split(""))
    .forEach((index) => (counter[index] = (counter[index] || 0) + 1));

  for (const property in counter) {
    if (counter[property] <= 1) return false;
  }
  return true;
}

SameFrequency("hello", "olleh");
// //Worst case = O(n)
// //Best case = O(1)
