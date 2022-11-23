// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
let notSortedArr;
notSortedArr = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];
function selectionSort(array) {
    var newArray;
    newArray = [];
    while (array.length > 0) {
        let smallestElement = Math.min(...array);
        let indexOfSE = array.indexOf(smallestElement);
        array.splice(indexOfSE, 1);
        let addElementToArray = newArray.push(smallestElement);
    }
    console.log(newArray);
    console.log("Selection Sort Works!");
    return newArray;
}
selectionSort(notSortedArr);
// Test Algorithm With (node selection-sort)
