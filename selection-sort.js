// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
// If My Code Used The Same Function Multiple Times Or
// If This File Was Really Long, It Would Be Much Easier
// With TypeScript.
let notSortedArr;
notSortedArr = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];
// Selection Sort Will Only Take An Array Of Numbers
// And Only Be Able To Return An Array Of Numbers. If These
// Requirements Aren't Met, It Will Give Me An Error.
let selectionSort;
selectionSort = (array) => {
    var newArray;
    newArray = [];
    while (array.length > 0) {
        // Made Variables Only Allow Numbers
        // This Makes It So I Get An Error If I Accidentally 
        // Make The Variable A String Or Boolean Later
        let smallestElement = Math.min(...array);
        let indexOfSE = array.indexOf(smallestElement);
        array.splice(indexOfSE, 1);
        let addElementToArray = newArray.push(smallestElement);
    }
    console.log(newArray);
    console.log("Selection Sort Works!");
    return newArray;
};
selectionSort(notSortedArr);
// Expecting A Sorted Array In The Console
// Test Algorithm With (node selection-sort)
