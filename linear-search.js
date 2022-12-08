// Since I explained why each algorithm works in the iterative
// algorithms module, I won't comment on why each algorithm works.
// I will only comment on the TypeScript side of things.
// Made Each Array Only Allow Numbers
// TypeScript Is Very Useful For Debugging Code
// If My Code Used The Same Function Multiple Times Or
// If This File Was Really Long, It Would Be Much Easier
// With TypeScript.
let sortedArr;
sortedArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sortedArr0;
sortedArr0 = [
    1, 3, 6, 8, 12, 19, 20, 21, 25, 30, 31, 33, 38, 39, 45,
];
// Linear Search Will Only Take An Array Of Numbers,
// A Search Term That's A Number And Only Be Able To Return
// A Number. If These Requirements Aren't Met, It Will Give
// Me An Error.
let linearSearch;
linearSearch = (array, searchTerm) => {
    // Made Variables Only Allow Numbers
    // This Makes It So I Get An Error If I Accidentally 
    // Make The Variable A String Or Boolean Later
    var searchedElement = null;
    var index = 0;
    while (searchedElement > searchTerm || searchedElement < searchTerm) {
        searchedElement = array[index];
        if (searchedElement > searchTerm || searchedElement < searchTerm) {
            index += 1;
        }
    }
    console.log("The Index Is: " + index);
    console.log("Linear Search Works!");
    return index;
};
linearSearch(sortedArr, 11);
// Expecting Index To Equal 10, It Will Show Up In The Console
linearSearch(sortedArr0, 25);
// Expecting Index To Equal 8, It Will Show Up In The Console
// Test Algorithm With (node linear-search)
// Used The tsc Command To Compile TypeScript Into JavaScript
