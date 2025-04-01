function Subsequence(sub: string, full: string): boolean {
  let index = 0;
  for (let i = 0; i < full.length; i++) {
    if (full[i] === sub[index]) index++;
  }
  return index === sub.length;
}

Subsequence("book", "brooklyn");

//Worst case = O(m)
//Best case = O(m)
