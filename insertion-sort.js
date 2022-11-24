// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
let notSortedArr1;
notSortedArr1 = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];
function insertionSort(array) {
    // Made Variables Only Allow Numbers
    // This Makes It So I Get An Error If I Accidentally 
    // Make The Variable A String Or Booleann Later
    let arrayLength = array.length;
    for (let index = 1; index < arrayLength; index += 1) {
        let element = array[index];
        let lastSorted = index - 1;
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
