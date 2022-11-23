// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
let notSortedArr1: number[];
notSortedArr1 = [
  15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];

function insertionSort(array: number[]) {
  let arrayLength: number = array.length;
  for (let index: number = 1; index < arrayLength; index += 1) {
    let element: number = array[index];
    let lastSorted: number = index - 1;
    while (lastSorted > -1 && element < array[lastSorted]) {
      array[lastSorted + 1] = array[lastSorted];
      lastSorted -= 1;
    }
    array[lastSorted + 1] = element;
  }
  console.log(array);
  console.log("Insertion Sort Works!");
  return array;
}

insertionSort(notSortedArr1);

// Test Algorithm With (node insertion-sort)
