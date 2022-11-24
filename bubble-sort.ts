// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.

// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
// If My Code Used The Same Function Multiple Times Or
// If This File Was Really Long, It Would Be Much Easier
// With TypeScript.

let notSortedArr0: number[];
notSortedArr0 = [
  15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];

// Bubble Sort Will Only Take An Array Of Numbers
// And Only Be Able To Return An Array Of Numbers. If These
// Requirements Aren't Met, It Will Give Me An Error.
let bubbleSort: (a: number[]) => number[];

bubbleSort = (array: number[]) => {
  // This Variable I Set As A Boolean
  // To Check If I Made A Swap Or Not
  let swapped: boolean = true;
  // Made Other Variables Only Allow Numbers
  // This Makes It So I Get An Error If I Accidentally 
  // Make The Variable A String Or Boolean Later
  let arrayLength: number = array.length;
  while (swapped == true) {
    swapped = false;
    let swapperIndex: number = 0;
    for (swapperIndex; swapperIndex < arrayLength; swapperIndex += 1) {
      if (array[swapperIndex] > array[swapperIndex + 1]) {
        let swap: number = array[swapperIndex];
        array[swapperIndex] = array[swapperIndex + 1];
        array[swapperIndex + 1] = swap;
        swapped = true;
      }
    }
  }
  console.log(array);
  console.log("Bubble Sort Works!");
  return array;
}

bubbleSort(notSortedArr0);
// Expecting A Sorted Array In The Console

// Test Algorithm With (node bubble-sort)
