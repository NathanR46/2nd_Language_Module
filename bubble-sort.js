// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
let notSortedArr0;
notSortedArr0 = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];
function bubbleSort(array) {
    let swapped = true;
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
// Test Algorithm With (node bubble-sort)
