type NestedArray<T> = T | NestedArray<T>[];
function FlattenArray(array: NestedArray<string>): string {
  if (typeof array === "string") return array;
  return array.map(FlattenArray).join("");
}

FlattenArray([[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]);
//Worst case = O(n^2)
//Best case = O(n)

//ways to cheat
// type NestedArray<T> = T | NestedArray<T>[];
// function FlattenArray(array: NestedArray<string>): string {
//   return (array as any).flat(Infinity).join("");
// }
//ways to cheat
//Worst case = O(n)
//Best case = O(n)
