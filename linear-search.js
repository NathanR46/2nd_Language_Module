let sortedArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20,
];
let sortedArr0 = [
    1, 3, 6, 8, 12, 19, 20, 21, 25, 30, 31, 33, 38, 39, 45,
];
function linearSearch(array, searchTerm) {
    var searchedElement = null;
    var index = 0;
    // Each index is searched by checking to see if it equals the search term.
    while (searchedElement > searchTerm || searchedElement < searchTerm) {
        // This makes it equal the next index that it hasn't searched yet.
        searchedElement = array[index];
        // If it doesn't equal, it makes the index equal the next index that hasn't been searched.
        if (searchedElement > searchTerm || searchedElement < searchTerm) {
            index += 1;
        }
    }
    console.log("The Index Is: " + index);
    return index;
}
linearSearch(sortedArr, 11);
// Expecting Index To Equal 10, It Will Show Up In The Console
linearSearch(sortedArr0, 25);
// Expecting Index To Equal 8, It Will Show Up In The Console
// Test Algorithm With (node linear-search.js)
// Code Works
