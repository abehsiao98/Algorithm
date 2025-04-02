function UniqueLettersString(str: string): string {
  let left = 0;
  let result = "";
  const seen = new Set<string>();

  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(str[right]);
    if (right - left + 1 > result.length) result = str.slice(left, right + 1);
  }

  return result;
}

UniqueLettersString("abcabcbb");
//Worst case = O(n)
//Best case = O(n)
