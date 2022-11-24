// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
// If My Code Used The Same Function Multiple Times Or
// If This File Was Really Long, It Would Be Much Easier
// With TypeScript. 
let sortedArr1;
sortedArr1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sortedArr2;
sortedArr2 = [
    1, 3, 6, 8, 12, 19, 20, 21, 25, 30, 31, 33, 38, 39, 45,
];
// Binary Search Will Only Take An Array Of Numbers,
// A Search Term That's A Number And Only Be Able To Return
// A Number. If These Requirements Aren't Met, It Will Give
// Me An Error.
let binarySearch;
binarySearch = (array, searchTerm) => {
    let clonedArray;
    clonedArray = [...array];
    // Made Each Variable Only Allow Numbers
    // This Makes It So I Get An Error If I Accidentally 
    // Make The Variable A String Or Boolean Later
    let arrayLength = null;
    let divideArray = null;
    let roundArray = null;
    let checkElement = -1;
    while (checkElement > searchTerm || checkElement < searchTerm) {
        let arrayLength = array.length;
        let divideArray = arrayLength / 2;
        let roundArray = Math.floor(divideArray);
        let middle = roundArray;
        checkElement = array[middle];
        if (checkElement == searchTerm) {
            let index = clonedArray.indexOf(checkElement);
            console.log("The Index Is: " + index);
            console.log("Binary Search Works!");
            return index;
        }
        if (checkElement > searchTerm) {
            array.splice(-middle);
        }
        if (checkElement < searchTerm) {
            for (let i = 0; i < middle; i += 1) {
                let deleteFirstHalf = array.shift();
            }
        }
    }
};
binarySearch(sortedArr1, 14);
// Expecting Index To Equal 13, It Will Show Up In The Console
binarySearch(sortedArr2, 30);
// Expecting Index To Equal 9, It Will Show Up In The Console
// Test Algorithm With (node binary-search)
