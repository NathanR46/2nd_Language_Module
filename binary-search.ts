let sortedArr1: any = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20,
];

let sortedArr2: any = [
  1, 3, 6, 8, 12, 19, 20, 21, 25, 30, 31, 33, 38, 39, 45,
];

function binarySearch(array, searchTerm) {
  // This makes a clone of the original array that is 
  // unaffected by the inevitable changes made to the original array.
  let clonedArray: any = [...array];
  // These are just set oustide the while loop because it's a habit.
  let arrayLength: number = null;
  let divideArray: Number = null;
  let roundArray: number = null;
  let checkElement: number = -1;
  // While the element we are looking for doesn't equal the one being searched currently, 
  // then it will keep searching.
  while (checkElement > searchTerm || checkElement < searchTerm) {
    // This gets the array length and divides it 
    // so that it can eliminate half the array later if checkElement doesn't equal searchTerm.
    let arrayLength: number = array.length;
    let divideArray: number = arrayLength / 2;
    // I need to round this down so that it searches an actual index rather than a decimal index.
    let roundArray: number = Math.floor(divideArray);
    let middle: number = roundArray;
    // This finally checks if it is the right index or not.
    checkElement = array[middle];
    // If it is equal to the search term, it will take the element and put it into the unaffected
    // array and return that index rather than returning an index that doesn't exist in the array that was changed.
    if (checkElement == searchTerm) {
      let index: number = clonedArray.indexOf(checkElement);
      console.log("The Index Is: " + index);
      return index;
    }
    // This takes the last half of the array and deletes it since the 
    // middle of the array is greater than the searchTerm.
    if (checkElement > searchTerm) {
      array.splice(-middle);
    }
    // This takes this first half of the array and deletes all of those indexes 
    // with the middle index we got earlier since the middle of the array is less than the searchTerm.
    if (checkElement < searchTerm) {
      for (let i = 0; i < middle; i += 1) {
        let deleteFirstHalf: any = array.shift();
      }
    }
  }
}

binarySearch(sortedArr1, 14);
// Expecting Index To Equal 13, It Will Show Up In The Console
binarySearch(sortedArr2, 30);
// Expecting Index To Equal 9, It Will Show Up In The Console

// Test Algorithm With (node binary-search)
// Code Works

// Next Step Is To Add TypeScript Features
