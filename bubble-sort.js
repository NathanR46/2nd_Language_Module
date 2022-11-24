// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
let notSortedArr0;
notSortedArr0 = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];
function bubbleSort(array) {
    // This Variable I Set As A Boolean
    // To Check If I Made A Swap Or Not
    let swapped = true;
    // Made Other Variables Only Allow Numbers
    // This Makes It So I Get An Error If I Accidentally 
    // Make The Variable A String Or Boolean Later
    let arrayLength = array.length;
    while (swapped == true) {
        swapped = false;
        let swapperIndex = 0;
        for (swapperIndex; swapperIndex < arrayLength; swapperIndex += 1) {
            if (array[swapperIndex] > array[swapperIndex + 1]) {
                let swap = array[swapperIndex];
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
