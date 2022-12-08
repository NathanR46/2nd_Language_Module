// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.

// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
// If My Code Used The Same Function Multiple Times Or
// If This File Was Really Long, It Would Be Much Easier
// With TypeScript.

let notSortedArr1: number[];
notSortedArr1 = [
  15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];

// Insertion Sort Will Only Take An Array Of Numbers
// And Only Be Able To Return An Array Of Numbers. If These
// Requirements Aren't Met, It Will Give Me An Error.
let insertionSort: (a: number[]) => number[];

insertionSort = (array: number[]) => {
  // Made Variables Only Allow Numbers
  // This Makes It So I Get An Error If I Accidentally 
  // Make The Variable A String Or Booleann Later
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
// Expecting A Sorted Array In The Console

// Test Algorithm With (node insertion-sort)

// Used The tsc Command To Compile TypeScript Into JavaScript
